import { APIGatewayEvent } from 'aws-lambda'
import { addTodo } from './resolvers/addTodo'

type AWSInfo = {
  fieldName: string
}

interface AWSAppSyncEvent extends APIGatewayEvent {
  identity: AWSCognitoIdentity
  info: AWSInfo
  arguments: any
}

type AWSCognitoIdentity = {
  claims: AWSCognitoClaims
}

type AWSCognitoClaims = {
  email: string
}

export const graphql = async (event: AWSAppSyncEvent): Promise<unknown> => {
  const {
    identity: {
      claims: { email }
    },
    info: { fieldName }
  } = event

  switch (fieldName) {
    case 'addTodo':
      const todo = await addTodo(event.arguments)
      return todo
  }

  return {
    message: `User: ${email} called Lambda, but there is no resolver for ${fieldName} yet.`
  }
}
