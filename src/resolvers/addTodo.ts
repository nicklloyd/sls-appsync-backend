import { DynamoDB } from 'aws-sdk'
import { v4 as uuid } from 'uuid'

const docClient = new DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })

type Todo = {
  id: string
  name: string
  description: string
}

export const addTodo = async (input: Todo): Promise<Todo> => {
  const id: string = uuid()

  const params = {
    TableName: process.env.TODOS_TABLE,
    Item: {
      id: id,
      name: input.name,
      description: input.description
    }
  }

  try {
    await docClient.put(params).promise()

    return {
      id: id,
      name: input.name,
      description: input.description
    }
  } catch (err) {
    return err
  }
}
