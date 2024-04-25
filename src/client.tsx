import * as React from "react"
import {createRoot} from "react-dom/client"
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js'
import {Pie} from 'react-chartjs-2'

const ChartComponent = () => {
  ChartJS.register(ArcElement, Tooltip, Legend)

  const data = {
    labels: ['奥州ロマン', 'シナノゴールド', 'ピンクレディ', 'ブラムリー'],
    datasets: [
      {
        label: '購入数',
        data: [1, 5, 3, 2],
        backgroundColor: [
          'firebrick', 'gold', 'pink', 'mediumseagreen'
        ],
        borderColor: [
          'firebrick', 'gold', 'pink', 'mediumseagreen'
        ],
        borderWidth: 1
      }
    ]
  }

  return (
    <div style={{width: '300px'}}>
      <Pie data={data} />
    </div>
  )
}

const App = () => {
  return (
    <>
      <h1>Hello world</h1>
      <ChartComponent/>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
