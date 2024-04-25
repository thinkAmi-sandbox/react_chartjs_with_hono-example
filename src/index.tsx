// import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import {renderToReadableStream, renderToString} from "react-dom/server"

const app = new Hono()

app.get('*', (c) => {
  return c.html(
    renderToString(
      <html>
        <head>
          <meta charSet="utf-8"/>
          <meta content="width=device-width, initial-scale=1" name="viewport"/>
          <title>React app</title>
          {import.meta.env.PROD ? (
            <>
              <script type="module" src="/static/client.js"></script>
            </>
          ) : (
            <>
              <script type="module" src="/src/client/main.tsx"></script>
            </>
          )}
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>
    )
  )
})

export default app

// const port = 3000
// console.log(`Server is running on port ${port}`)
//
// serve({
//   fetch: app.fetch,
//   port
// })
