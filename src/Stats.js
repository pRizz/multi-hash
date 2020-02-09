import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import {Paper} from '@material-ui/core'

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
  const {chartProps, isLoading} = props
  return chartProps.map(chartProp => {
    return (
      <div key={chartProp.name} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', margin: 12}}>
        {isLoading && <div style={{position: 'absolute', justifyContent: 'center', width: '100%', height: '100%', backgroundColor: "rgba(128, 128, 128, 0.1)", zIndex: 10}}>
          <CircularProgress
            color={'secondary'}
            style={{alignSelf: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1, margin: 'auto', height: '100%'}} />
        </div>}

        <Paper style={{padding: 20, margin: 20}}>
          <Typography variant="h4">
            {chartProp.name}
          </Typography>
          <BarChart
            width={400}
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
        </Paper>

      </div>
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
  const {data, statsDescription, isLoading} = props
  const chartProps = chartPropsFromStatsProps(data)

  return (
    <section>
      <Typography variant="h2">
        Stats for hashing {statsDescription || 'null value'}
      </Typography>

      <ChartComponentsFromChartProps chartProps={chartProps} isLoading={isLoading}/>
    </section>
  )
}
