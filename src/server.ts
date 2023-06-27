import { app } from './app'
import { env } from './zod'

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server is Running!')
  })
