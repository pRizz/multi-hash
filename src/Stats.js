import React from 'react'
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'
import Container from '@material-ui/core/Container'

const chartConfigs = [
  {
    name: "Duration (lower is better)",
    dataKey: "duration (s)"
  },
  {
    name: "Throughput (higher is better)",
    dataKey: "MB/s"
  },
  {
    name: "Throughput Inverse (lower is better)",
    dataKey: "ns/byte"
  }
]

function chartPropsFromStatsProps(statsProps) {
  return chartConfigs.map(chartConfig => {
    const {name, dataKey} = chartConfig
    const chartData = statsProps.filter(statsProp => {
      return !!statsProp[dataKey]
    }).map(statsProp => {
      return {
        "Hashing Function": statsProp.hashingFunctionName,
        [dataKey]: statsProp[dataKey]
      }
    })
    return {
      name,
      dataKey,
      chartData
    }
  })
}

function ChartComponentsFromChartProps(props) {
  const {chartProps} = props
  return chartProps.map(chartProp => {
    return (
      <section key={chartProp.name} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2>
          {chartProp.name}
        </h2>
        <BarChart
          width={500}
          height={300}
          data={chartProp.chartData}
          margin={{
            top: 5, right: 5, left: 5, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="Hashing Function"/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Bar dataKey={chartProp.dataKey} fill="#8884d8"/>
        </BarChart>
      </section>
    )
  })
}

/**
 * props: {
 *   data: [
 *     {
 *       hashingFunctionName: 'sha-1',
*         "duration (s)": 12,
*         "MB/s": 230,
*         etc.
 *     }, ...
 *   ]
 * }
 * */
export default function Stats(props) {
  const {data} = props
  const chartProps = chartPropsFromStatsProps(data)

  return (
    <section>
      <h2>
        Stats
      </h2>

      <ChartComponentsFromChartProps chartProps={chartProps} />
    </section>
  )
}
