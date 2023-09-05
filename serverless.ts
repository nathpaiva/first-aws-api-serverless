import type { AWS } from '@serverless/typescript'

const serverlessConfig: AWS = {
  org: 'nathpaiva',
  app: 'aws-node-project',
  service: 'first-aws-api-serverless',
  frameworkVersion: '3',
  useDotenv: true,

  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    region: 'us-east-1',
    // iam: {
    //   role: {
    //     statements: [
    //       {
    //         Effect: 'Allow',
    //         Action: ['dynamodb:*'],
    //         Resource: 'arn:aws:dynamodb:ddblocal:000000000000:table/forumTable',
    //       },
    //     ],
    //   },
    // },
  },

  plugins: [
    'serverless-offline',
    'serverless-plugin-typescript',
    'serverless-dotenv-plugin',
    // 'serverless-dynamodb-autoscaling',
    // 'serverless-dynamodb-local',
    // 'serverless-plugin-offline-dynamodb-stream',
    // 'serverless-create-global-dynamodb-table',
  ],

  functions: {
    api: {
      handler: 'src/hello/index.hello',
      events: [
        {
          httpApi: {
            path: '/api/hello/{id+}',
            method: '*',
          },
        },
      ],
    },
    goodbye: {
      handler: 'src/goodbye/index.goodbye',
      events: [
        {
          httpApi: {
            path: '/api/goodbye/{id+}',
            method: '*',
          },
        },
      ],
    },
  },

  // resources: {
  //   Resources: {
  //     forumTable: {
  //       Type: 'AWS::DynamoDB::Table',
  //       Properties: {
  //         TableName: 'forumTable',
  //         AttributeDefinitions: [
  //           {
  //             AttributeName: 'id_topic',
  //             AttributeType: 'S',
  //           },
  //           {
  //             AttributeName: 'status',
  //             AttributeType: 'S',
  //           },
  //         ],
  //         KeySchema: [
  //           {
  //             AttributeName: 'id_topic',
  //             KeyType: 'HASH',
  //           },
  //           {
  //             AttributeName: 'status',
  //             KeyType: 'RANGE',
  //           },
  //         ],
  //         ProvisionedThroughput: {
  //           ReadCapacityUnits: 1,
  //           WriteCapacityUnits: 1,
  //         },
  //       },
  //     },
  //   },
  // },

  // custom: {
  //   dynamodb: {
  //     stages: 'dev',
  //     start: {
  //       docker: true,
  //       port: 8000,
  //       inMemory: true,
  //       migrate: true,
  //     },
  //   },
  // },
}

module.exports = serverlessConfig
