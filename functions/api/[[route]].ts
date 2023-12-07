import { Hono } from 'hono'
import { cache } from 'hono/cache'
import { handle } from 'hono/cloudflare-pages'
import { cors } from 'hono/cors'
import { secureHeaders } from 'hono/secure-headers'

type Bindings = {}

const app = new Hono<{ Bindings: Bindings }>().basePath('/api')

// Middleware configuration for all routes

// Enable CORS
app.use('/*', cors())

// Enhance security with secureHeaders
app.use('*', secureHeaders())

// Cache configuration for all GET requests
// Name of the cache: 'lilnouns'
// Cache control duration: one hour
app.get(
  '*',
  cache({
    cacheName: 'lilnouns',
    cacheControl: 'max-age=3600',
  }),
)

// Define the root route ('/') handler for GET requests
app.get('/', (c) => c.text('Hello Hono!'))

export const onRequest = handle(app)
