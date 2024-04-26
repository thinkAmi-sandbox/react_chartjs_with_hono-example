import {createLazyRoute, Link} from "@tanstack/react-router"
import * as React from "react"
import {useEffect, useState} from "react"
import {ArcElement, Chart as ChartJS, ChartData, Legend, Tooltip} from 'chart.js'
import {Pie} from 'react-chartjs-2'
import {ApplesType} from "../../index"
import {hc} from 'hono/client'

type MyChart = ChartData<"pie", number[], unknown>
const client = hc<ApplesType>('http://localhost:5173')

const ChartComponent = () => {
  ChartJS.register(ArcElement, Tooltip, Legend)

  const [data, setData] = useState<MyChart>()

  useEffect(() => {
    const fetchApples = async () => {
      const response = await client.api.apples.$get()
      console.log(response)
      if (response.ok) {
        const apples = await response.json()
        setData(apples)
      }
    }

    fetchApples()
  }, [])

  if (!data) return

  return (
    <div style={{width: '300px'}}>
      <Pie data={data} />
    </div>
  )
}

const Component = () => {
  return (
    <>
      <h1>Hello, Chart</h1>
      <Link to="/">Home</Link>
      <hr />
      <ChartComponent />
    </>
  )
}

export const Route = createLazyRoute('/chart')({
  component: Component
})