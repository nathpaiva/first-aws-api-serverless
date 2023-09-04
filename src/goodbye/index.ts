import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

export const goodbye = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  try {
    if (!event.pathParameters?.id) {
      throw new Error('You must provide an id')
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Goodbye' }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    }
  }
}
