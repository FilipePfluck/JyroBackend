import { Elysia } from 'elysia'
import { createTodo } from './routes/create-todo'

const app = new Elysia().use(createTodo)

app.listen(3001, () => {
  console.log('HTTP Server Running')
})
