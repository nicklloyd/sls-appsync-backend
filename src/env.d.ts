declare namespace NodeJS {
  export interface ProcessEnv {
    AWS_ACCOUNT_ID: string
    STAGE: string
    REGION: string
    TODOS_TABLE: string
    USERS_TABLE: string
  }
}
