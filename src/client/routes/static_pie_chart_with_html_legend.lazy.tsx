import { createLazyRoute } from '@tanstack/react-router'
import { ArcElement, Legend, Tooltip, Chart as chartJs } from 'chart.js'
import { Pie } from 'react-chartjs-2'

const htmlLegendPlugin = {
  id: 'htmlLegend',
  afterUpdate(chart: any) {
    // Even if called multiple times, draw only once.
    const customUl = document.getElementById('custom-ul')
    if (customUl) return

    const items = chart.options.plugins.legend.labels.generateLabels(chart)
    const ul = document.createElement('ul')
    ul.id = 'custom-ul'

    items.forEach((item: any) => {
      const li = document.createElement('li')
      const boxSpan = document.createElement('span')
      boxSpan.style.background = item.fillStyle
      li.appendChild(boxSpan)
      li.appendChild(document.createTextNode(item.text))
      ul.appendChild(li)
    })

    const customLegend = document.getElementById('custom-legend')
    customLegend?.appendChild(ul)
  },
}

const Component = () => {
  chartJs.register(ArcElement, Tooltip, Legend)
  chartJs.overrides.pie.plugins.legend.display = false

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
    <div
      style={{
        width: 400,
        height: 200,
        // Use flexbox to arrange pie charts and legends side by side
        display: 'flex', // justifyContent: 'space-between', flexBasis: '50%'
      }}
    >
      <Pie data={data} plugins={[htmlLegendPlugin]} />
      <div
        id={'custom-legend'}
        style={{
          maxHeight: '100%',
          overflowY: 'auto',
          width: '200px',
          padding: '10px',
          boxSizing: 'border-box',
          border: '1px solid #ccc',
          backgroundColor: '#f9f9f9',
        }}
      />
    </div>
  )
}

export const Route = createLazyRoute('/static_pie_chart_with_html_legend')({
  component: Component,
})
