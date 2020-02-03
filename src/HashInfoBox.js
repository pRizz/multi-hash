import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'

function metricsFromInfo(durationMS, byteCount) {
  const nanoseconds = durationMS * 1000000
  const nsPerByte = nanoseconds / byteCount
  const megabytes = byteCount / 1000000
  const seconds = durationMS / 1000
  const MBperSecond = megabytes / seconds

  return {
    "duration (s)": seconds,
    "MB/s": MBperSecond,
    "ns/byte": nsPerByte
  }
}

function textFromMetrics(metrics) {
  const durationSeconds = metrics["duration (s)"]
  const MBperSecond = metrics["MB/s"]
  const nsPerByte = metrics["ns/byte"]

  const hashDurationText = (durationSeconds * 1000).toLocaleString(undefined, {
    maximumFractionDigits: 3
  })
  const nsPerByteText = nsPerByte.toLocaleString(undefined, {
    maximumFractionDigits: 3
  })
  const MBperSecondText = MBperSecond.toLocaleString(undefined, {
    maximumFractionDigits: 3
  })
  return `Took ${hashDurationText} ms | ${nsPerByteText} ns/byte | ${MBperSecondText}MB/s`
}

export function HashInfoBox(props) {
  const {bufferToHash, hashingFunctionName, worker, hashDefinitionIndex, onHashInfoData} = props

  const [hashText, setHashText] = React.useState("")
  const [hasWorkerListener, setHasWorkerListener] = React.useState(false)

  const [willHashBuffer, setWillHashBuffer] = React.useState("")
  const [didHashBuffer, setDidHashBuffer] = React.useState("")

  const [bufferThatWasHashed, setBufferThatWasHashed] = React.useState(null)
  const [helperText, setHelperText] = React.useState("")

  if(bufferThatWasHashed === null
  || bufferThatWasHashed.length !== bufferToHash.length) {
    setBufferThatWasHashed(bufferToHash)
    setWillHashBuffer(bufferToHash)
    worker.postMessage({
      hashDefinitionIndex,
      bufferToHash,
      hashingFunctionName
    })
    if(!hasWorkerListener) {
      setHasWorkerListener(true)
      worker.addEventListener('message', e => {
        const workerData = e.data

        if(workerData.hashingFunctionName !== hashingFunctionName) {
          return
        }

        const metrics = metricsFromInfo(workerData.hashDuration, workerData.bufferToHash.length)
        const hashDurationText = textFromMetrics(metrics)
        setHashText(workerData.hash)
        setDidHashBuffer(workerData.bufferToHash)
        setHelperText(hashDurationText)

        onHashInfoData({
          hashingFunctionName,
          ...metrics
        })
      })
    }
  }

  const isLoading = willHashBuffer.length !== didHashBuffer.length // FIXME; compare buffers

  return (
    <div key={hashingFunctionName} style={{marginTop: '2em', marginBottom: '2em', position: 'relative'}}>
      {isLoading && <div style={{position: 'absolute', justifyContent: 'center', width: '100%', height: '100%'}}>
        <CircularProgress style={{alignSelf: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1, margin: 'auto', height: '100%'}} />
      </div>}
      <TextField
        id="outlined-multiline-static"
        label={hashingFunctionName}
        multiline
        rows="4"
        value={hashText}
        variant="outlined"
        helperText={helperText}
        fullWidth
        style={{position: 'relative'}}
      />
    </div>
  )
}
