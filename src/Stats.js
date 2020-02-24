import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import {Paper} from '@material-ui/core'

const chartConfigs = [
  {
    name: "Duration (less is better)",
    dataKey: "duration (s)"
  },
  {
    name: "Throughput (more is better)",
    dataKey: "MB/s"
  },
  {
    name: "Throughput Inverse (less is better)",
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

  const width = 360
  const maxWidth = width + 100

  return chartProps.map(chartProp => {
    return (
      <div key={chartProp.name} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', margin: 40, maxWidth}}>
        {isLoading && <div style={{position: 'absolute', justifyContent: 'center', width: '100%', height: '100%', backgroundColor: "rgba(128, 128, 128, 0.1)", zIndex: 10}}>
          <CircularProgress
            color={'secondary'}
            style={{alignSelf: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1, margin: 'auto', height: '100%'}} />
        </div>}

        <Paper style={{display: "flex", flexDirection: "column", padding: 20, margin: 20, alignItems: "center"}}>
          <Typography variant="h4" style={{marginBottom: 20}}>
            {chartProp.name}
          </Typography>
            <BarChart
              width={width}
              height={1000}
              data={chartProp.chartData}
              layout="vertical"
              margin={{ top: 20, right: 20, bottom: 20, left: 50 }}
            >
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis type={"number"}>
              </XAxis>
              <YAxis dataKey="Hashing Function" type="category" />
              <Tooltip/>
              <Legend/>
              <Bar dataKey={chartProp.dataKey} fill="#8884d8">
              </Bar>
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
    <section style={{textAlign: "center"}}>
      <Typography variant="h2">
        Stats for hashing {statsDescription || 'null value'}
      </Typography>

      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
        <ChartComponentsFromChartProps chartProps={chartProps} isLoading={isLoading}/>
      </div>
    </section>
  )
}
