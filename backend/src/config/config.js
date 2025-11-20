import { config } from 'dotenv'

config()

export const PORT = process.env.PORT

export const DB_HOST = process.env.DB_HOST || 'myDB'
export const DB_USER = process.env.DB_USER || 'postgres'
export const DB_PASSWORD = process.env.DB_PASSWORD || '123456'
export const DB_PORT = process.env.DB_PORT || '5432'
export const DB_DATABASE = process.env.DB_DATABASE || 'todolist'


