type AWSInfo = {
  fieldName: string
}

type AWSAppSyncEvent = {
  identity: AWSCognitoIdentity
  info: AWSInfo
}

type AWSCognitoIdentity = {
  claims: AWSCognitoClaims
}

type AWSCognitoClaims = {
  email: string
}

export const graphql = async (event: AWSAppSyncEvent): Promise<unknown> => {
  console.log(event)
  const {
    identity: {
      claims: { email }
    },
    info: { fieldName }
  } = event

  return {
    message: `User: ${email} Resolved via Lambda by calling: ${fieldName}`
  }
}
