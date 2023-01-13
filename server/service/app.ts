import server from '$/$server'
import { API_BASE_PATH, CORS_ORIGIN } from '$/service/envValues'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import type { FastifyServerFactory } from 'fastify'
import Fastify from 'fastify'

export const init = (serverFactory?: FastifyServerFactory) => {
  const app = Fastify({ serverFactory })
  app.register(helmet)
  app.register(cors, { origin: CORS_ORIGIN })
  server(app, { basePath: API_BASE_PATH })

  return app
}
