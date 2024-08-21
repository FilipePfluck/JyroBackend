import Elysia, { t } from 'elysia'
import { prismaClient } from '../db'

export const createTodo = new Elysia().post(
  '/todo',
  async ({ body, set }) => {
    const { name, done = false } = body

    await prismaClient.todo.create({
      data: {
        name,
        done,
      },
    })

    set.status = 204
  },
  {
    body: t.Object({
      name: t.String(),
      done: t.Optional(t.Boolean()),
    }),
  },
)
