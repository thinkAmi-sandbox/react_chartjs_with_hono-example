import * as React from "react"
import {createRoot} from "react-dom/client"

const App = () => {
  return (
    <h1>Hello world</h1>
  )
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
