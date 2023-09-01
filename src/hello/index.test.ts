import { APIGatewayProxyEvent } from 'aws-lambda'

import { hello } from './'

describe('Hello', () => {
  test('should return a success message when called given an id', async () => {
    const response = await hello({
      pathParameters: {
        id: 123,
      },
    } as unknown as APIGatewayProxyEvent)
    const { message } = JSON.parse(response.body)

    expect(message).toBe('Hello from hello function')
  })
  test('should return an error message when called without an id', async () => {
    const response = await hello({
      pathParameters: {},
    } as unknown as APIGatewayProxyEvent)
    const { message } = JSON.parse(response.body)

    expect(message).toBe('You must provide an id')
  })
})
