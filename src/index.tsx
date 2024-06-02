// import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { renderToString } from 'react-dom/server'

const app = new Hono()

const appleRoute = app.get('/api/apples', (c) => {
  return c.json({
    labels: ['奥州ロマン', 'シナノゴールド', 'ピンクレディ', 'ブラムリー'],
    datasets: [
      {
        label: '購入数',
        data: [1, 5, 3, 2],
        backgroundColor: ['firebrick', 'gold', 'pink', 'mediumseagreen'],
        borderColor: ['firebrick', 'gold', 'pink', 'mediumseagreen'],
        borderWidth: 1,
      },
    ],
  })
})

export type ApplesType = typeof appleRoute

const productRoute = app.get('/api/products', (c) => {
  return c.json({
    labels: [
      '商品1',
      '商品2',
      '商品3',
      '商品4',
      '商品5',
      '商品6',
      '商品7',
      '商品8',
      '商品9',
      '商品10',
    ],
    datasets: [
      {
        label: '購入数',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        backgroundColor: ['orange'],
      },
    ],
  })
})

export type ProductsType = typeof productRoute

app.get('*', (c) => {
  return c.html(
    renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
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
      </html>,
    ),
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
