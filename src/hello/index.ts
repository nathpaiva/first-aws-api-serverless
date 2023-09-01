import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

export const hello = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  try {
    if (!event.pathParameters?.id) {
      throw new Error('You mush provide an id')
    }

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
