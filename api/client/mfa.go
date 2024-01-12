/*
Copyright 2023 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package client

import (
	"context"

	"github.com/gravitational/trace"

	"github.com/gravitational/teleport/api/client/proto"
	mfav1 "github.com/gravitational/teleport/api/gen/proto/go/teleport/mfa/v1"
	"github.com/gravitational/teleport/api/mfa"
)

// PromptMFA prompts the user for MFA.
func (c *Client) PromptMFA(ctx context.Context, chal *proto.MFAAuthenticateChallenge, promptOpts ...mfa.PromptOpt) (*proto.MFAAuthenticateResponse, error) {
	if c.c.MFAPromptConstructor == nil {
		return nil, trace.BadParameter("missing PromptAdminRequestMFA field, client cannot perform MFA ceremony")
	}

	return c.c.MFAPromptConstructor(promptOpts...).Run(ctx, chal)
}

// performAdminActionMFACeremony retrieves an MFA challenge from the server,
// prompts the user to answer the challenge, and returns the resulting MFA response.
func (c *Client) performAdminActionMFACeremony(ctx context.Context, adminActionName string) (*proto.MFAAuthenticateResponse, error) {
	chal, err := c.CreateAuthenticateChallenge(ctx, &proto.CreateAuthenticateChallengeRequest{
		Request: &proto.CreateAuthenticateChallengeRequest_ContextUser{},
		ChallengeExtensions: &mfav1.ChallengeExtensions{
			Scope:      mfav1.ChallengeScope_CHALLENGE_SCOPE_ADMIN_ACTION,
			AllowReuse: mfav1.ChallengeAllowReuse_CHALLENGE_ALLOW_REUSE_NO,
		},
	})
	if err != nil {
		return nil, trace.Wrap(err)
	}

	return c.PromptMFA(ctx, chal, mfa.WithPromptReasonAdminAction(adminActionName))
}
