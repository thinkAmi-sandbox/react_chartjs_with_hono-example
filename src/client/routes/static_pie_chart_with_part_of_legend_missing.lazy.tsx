import { createLazyRoute } from '@tanstack/react-router'
import { ArcElement, Legend, Tooltip, Chart as chartJs } from 'chart.js'
import { Pie } from 'react-chartjs-2'

const Component = () => {
  chartJs.register(ArcElement, Tooltip, Legend)
  chartJs.overrides.pie.plugins.legend.position = 'right'

  const data = {
    labels: [
      'ラベル1',
      'ラベル2',
      'ラベル3',
      'ラベル4',
      'ラベル5',
      'ラベル6',
      'ラベル7',
      'ラベル8',
      'ラベル9',
      'ラベル10',
    ],
    datasets: [
      {
        label: '購入数',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        backgroundColor: ['mediumseagreen'],
      },
    ],
  }

  return (
    <div style={{ width: 300, height: 200 }}>
      <Pie data={data} />
    </div>
  )
}

export const Route = createLazyRoute(
  '/static_pie_chart_with_part_of_legend_missing',
)({
  component: Component,
})
