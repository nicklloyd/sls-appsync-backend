export const graphql = async (
  event: unknown,
  context: unknown,
  info: unknown
): Promise<unknown> => {
  console.log(event)
  console.log(context)
  console.log(info)

  let response
  try {
    response = 'hello world from appsync'
  } catch (err) {
    console.log(err)
    return err
  }

  return response
}
