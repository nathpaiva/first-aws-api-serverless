import {
  DynamoDBClient,
  GetItemCommand,
  GetItemCommandInput,
} from '@aws-sdk/client-dynamodb'
import { marshall } from '@aws-sdk/util-dynamodb'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

const client = new DynamoDBClient({
  region: process.env.REGION,
  endpoint: process.env.DB_ENDPOINT,
})

const params: GetItemCommandInput = {
  TableName: 'forumTable',
  Key: marshall({
    status: 'PENDING',
    id_topic: 'Topic#01',
  }),
}

export const hello = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  try {
    if (!event.pathParameters?.id) {
      throw new Error('You must provide an id')
    }

    const results = await client.send(new GetItemCommand(params))

    console.log(results)

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello from hello function' }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    }
  }
}
