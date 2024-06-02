import { createLazyRoute } from '@tanstack/react-router'
import {
  ArcElement,
  type Chart,
  Legend,
  type LegendItem,
  Tooltip,
  Chart as chartJs,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { useProductsApi } from '../hooks/useProductsApi'

type PieChartType = Chart<'pie'>

const getOrCreateLegendList = () => {
  const legendContainer = document.getElementById('custom-legend')
  let listContainer = legendContainer?.querySelector('ul')
  if (listContainer) return listContainer

  listContainer = document.createElement('ul')
  legendContainer?.appendChild(listContainer)

  return listContainer
}

const htmlLegendPlugin = {
  id: 'htmlLegend',
  afterUpdate(chart: PieChartType) {
    const ul = getOrCreateLegendList()

    // Remove old legend items
    while (ul.firstChild) {
      ul.firstChild.remove()
    }

    const chartLabels = chart?.options?.plugins?.legend?.labels
    if (!chartLabels) return

    // @ts-ignore
    const items = chartLabels.generateLabels(chart)
    if (items === undefined) return

    items.forEach((item: LegendItem) => {
      const li = document.createElement('li')
      li.onclick = () => {
        if (item.index !== undefined) {
          chart.toggleDataVisibility(item.index)
          chart.update()
        }
      }

      const boxSpan = document.createElement('span')
      if (typeof item.fillStyle === 'string') {
        boxSpan.style.background = item.fillStyle
      }

      const textContainer = document.createElement('p')
      textContainer.style.textDecoration = item.hidden ? 'line-through' : ''
      textContainer.appendChild(document.createTextNode(item.text))

      li.appendChild(boxSpan)
      li.appendChild(textContainer)
      ul.appendChild(li)
    })

    const customLegend = document.getElementById('custom-legend')
    customLegend?.appendChild(ul)
  },
}

const Component = () => {
  chartJs.register(ArcElement, Tooltip, Legend)
  chartJs.overrides.pie.plugins.legend.display = false

  const { data, isLoading } = useProductsApi()
  if (isLoading) return <div>Loading...</div>
  if (!data) return

  return (
    <div
      style={{
        width: 400,
        height: 200,
        // Use flexbox to arrange pie charts and legends side by side
        display: 'flex',
      }}
    >
      <div>
        <Pie data={data} plugins={[htmlLegendPlugin]} />
      </div>
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

export const Route = createLazyRoute('/dynamic_pie_chart_with_html_legend')({
  component: Component,
})
