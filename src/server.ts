import fastify from 'fastify'
import { env } from './zod'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(transactionsRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server is Running!')
  })
