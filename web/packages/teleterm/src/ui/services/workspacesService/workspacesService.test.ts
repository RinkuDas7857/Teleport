/**
 * Copyright 2023 Gravitational, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ClustersService } from '../clusters';
import { StatePersistenceService } from '../statePersistence';

import { Workspace, WorkspacesService } from './workspacesService';

describe('restoring workspace', () => {
  function getTestSetup(options: {
    clusterUri: string; // assumes that only one cluster can be added
    persistedWorkspaces: Record<string, Workspace>;
  }) {
    const statePersistenceService: Partial<StatePersistenceService> = {
      getWorkspacesState: () => ({
        workspaces: options.persistedWorkspaces,
      }),
      saveWorkspacesState: jest.fn(),
    };

    const clustersService: Partial<ClustersService> = {
      subscribe: jest.fn(),
      unsubscribe: jest.fn(),
      findRootClusterByResource: jest.fn(),
      findCluster: jest.fn(),
      findGateway: jest.fn(),
      getClusters: () => [
        {
          uri: options.clusterUri,
          name: 'Test cluster',
          connected: true,
          leaf: false,
          proxyHost: 'test:3030',
          loggedInUser: {
            name: 'Alice',
            rolesList: [],
            sshLoginsList: [],
          },
        },
      ],
    };

    const clusterDocument = {
      kind: 'doc.cluster',
      title: 'Cluster Test',
      clusterUri: options.clusterUri,
      uri: 'docs/test-cluster-uri',
    };

    const workspacesService = new WorkspacesService(
      undefined,
      // @ts-expect-error using mocks
      clustersService,
      undefined,
      statePersistenceService
    );

    workspacesService.getWorkspaceDocumentService = () => ({
      // @ts-expect-error using mocks
      createClusterDocument() {
        return clusterDocument;
      },
    });

    return { workspacesService, clusterDocument };
  }

  it('restores the workspace if it there is a persisted state for given clusterUri', () => {
    const testClusterUri = '/clusters/test-uri';
    const testWorkspace: Workspace = {
      localClusterUri: testClusterUri,
      documents: [
        {
          kind: 'doc.terminal_shell',
          uri: 'docs/some_uri',
          title: '/Users/alice/Documents',
        },
      ],
      location: 'docs/some_uri',
    };

    const { workspacesService, clusterDocument } = getTestSetup({
      clusterUri: testClusterUri,
      persistedWorkspaces: { [testClusterUri]: testWorkspace },
    });

    workspacesService.restorePersistedState();
    expect(workspacesService.getWorkspaces()).toStrictEqual({
      [testClusterUri]: {
        localClusterUri: testWorkspace.localClusterUri,
        documents: [clusterDocument],
        location: clusterDocument.uri,
        previous: {
          documents: testWorkspace.documents,
          location: testWorkspace.location,
        },
      },
    });
  });

  it('creates empty workspace if there is no persisted state for given clusterUri', () => {
    const testClusterUri = '/clusters/test-uri';
    const { workspacesService, clusterDocument } = getTestSetup({
      clusterUri: testClusterUri,
      persistedWorkspaces: {},
    });

    workspacesService.restorePersistedState();
    expect(workspacesService.getWorkspaces()).toStrictEqual({
      [testClusterUri]: {
        localClusterUri: testClusterUri,
        documents: [clusterDocument],
        location: clusterDocument.uri,
        previous: undefined,
      },
    });
  });
});
