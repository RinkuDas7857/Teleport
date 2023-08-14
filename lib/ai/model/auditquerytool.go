package model

import (
	"context"
	"fmt"
	"strings"
	"time"

	"github.com/gravitational/trace"
	"github.com/sashabaranov/go-openai"

	"github.com/gravitational/teleport/gen/go/eventschema"
)

type auditQueryGenerationTool struct {
	llm *openai.Client
}

func (t *auditQueryGenerationTool) Name() string {
	return "Audit Query Generation"
}

func (t *auditQueryGenerationTool) Description() string {
	return fmt.Sprintf(`Generates a SQL query that can be ran against teleport audit events.
The input must be a single string describing what the query must achieve.`)
}

func (t *auditQueryGenerationTool) Run(ctx context.Context, input string) (string, error) {
	// This is a mock
	return "", trace.NotImplemented("auditQueryGenerationTool must not be called directly")
}

func (t *auditQueryGenerationTool) chooseEventTable(ctx context.Context, input string, tc *TokenCount) (string, error) {
	tableList, err := eventschema.TableList()
	if err != nil {
		return "", trace.Wrap(err)
	}

	prompt := []openai.ChatCompletionMessage{
		{
			Role: openai.ChatMessageRoleSystem,
			Content: `You are a tool that find the correct table to run a query on.
You will be given a list of tables, and a request from the user.
You MUST RESPOND ONLY with a single table name. If no table can answer the question, respond 'none'.`,
		},
		{
			Role:    openai.ChatMessageRoleUser,
			Content: tableList,
		},
		{
			Role:    openai.ChatMessageRoleUser,
			Content: fmt.Sprintf("The user request is: %s", input),
		},
	}
	promptTokens, err := NewPromptTokenCounter(prompt)
	if err != nil {
		return "", trace.Wrap(err)
	}
	tc.AddPromptCounter(promptTokens)

	response, err := t.llm.CreateChatCompletion(
		ctx,
		openai.ChatCompletionRequest{
			Model:       openai.GPT4,
			Messages:    prompt,
			Temperature: 0,
		},
	)

	if err != nil {
		return "", trace.Wrap(err)
	}

	completion := response.Choices[0].Message.Content
	completionTokens, err := NewSynchronousTokenCounter(completion)
	if err != nil {
		return "", trace.Wrap(err)
	}
	tc.AddCompletionCounter(completionTokens)

	eventType := strings.ToLower(completion)
	if !eventschema.IsValidEventType(eventType) {
		return "", trace.CompareFailed("Model response is not a valid event type: '%s'", eventType)
	}

	return eventType, nil

}

func (t *auditQueryGenerationTool) generateQuery(ctx context.Context, eventType, input string, tc *TokenCount) (string, error) {
	// get query
	eventSchema, err := eventschema.GetEventSchemaFromType(eventType)
	if err != nil {
		return "", trace.Wrap(err)
	}
	tableSchema, err := eventSchema.TableSchema()
	if err != nil {
		return "", trace.Wrap(err)
	}

	prompt := []openai.ChatCompletionMessage{
		{
			Role: openai.ChatMessageRoleSystem,
			Content: fmt.Sprintf(`You are a tool that generates Athena SQL queries to inspect audit events.
You will be given the schema of a table and a user request.
You MUST RESPOND ONLY with an SQL query that answers the user request.
If the request cannot be answered, respond 'none'.

Today's date is DATE('%s')`, time.Now().Format("2006-01-02")),
		},
		{
			Role:    openai.ChatMessageRoleUser,
			Content: fmt.Sprintf("The schema of the table `%s` is:\n\n%s", eventType, tableSchema),
		},
		{
			Role:    openai.ChatMessageRoleUser,
			Content: fmt.Sprintf("The user request is: %s", input),
		},
	}
	promptTokens, err := NewPromptTokenCounter(prompt)
	if err != nil {
		return "", trace.Wrap(err)
	}
	tc.AddPromptCounter(promptTokens)

	response, err := t.llm.CreateChatCompletion(
		ctx,
		openai.ChatCompletionRequest{
			Model:       openai.GPT4,
			Messages:    prompt,
			Temperature: 0,
		},
	)

	if err != nil {
		return "", trace.Wrap(err)
	}

	completion := response.Choices[0].Message.Content
	completionTokens, err := NewSynchronousTokenCounter(completion)
	if err != nil {
		return "", trace.Wrap(err)
	}
	tc.AddCompletionCounter(completionTokens)

	return completion, nil
}
