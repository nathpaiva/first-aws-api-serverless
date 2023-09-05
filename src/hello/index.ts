// import {
//   DynamoDBClient,
//   GetItemCommand,
//   GetItemCommandInput,
// } from '@aws-sdk/client-dynamodb'
// import { marshall, unmarshall } from '@aws-sdk/util-dynamodb'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

// const client = new DynamoDBClient({ region: 'us-west-2' })

// const params: GetItemCommandInput = {
//   TableName: 'forum_table',
//   // Convert the key JavaScript object you are retrieving to the required DynamoDB format. The format of values specifies
//   // the datatype. The following list demonstrates different datatype formatting requirements:
//   // HashKey: "hashKey",
//   // NumAttribute: 1,
//   // BoolAttribute: true,
//   // ListAttribute: [1, "two", false],
//   // MapAttribute: { foo: "bar" },
//   // NullAttribute: null
//   Key: marshall({
//     status: 'PENDING',
//     id_topic: 'Topic#01',
//   }),
// }

var a = ''

export const hello = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  try {
    if (!event.pathParameters?.id) {
      throw new Error('You must provide an id')
    }

    // const results = await client.send(new GetItemCommand(params))
    // console.log(results)

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
