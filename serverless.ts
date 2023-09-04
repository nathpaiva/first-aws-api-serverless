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
  },
  plugins: [
    'serverless-offline',
    'serverless-plugin-typescript',
    'serverless-dotenv-plugin',
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
}

module.exports = serverlessConfig
