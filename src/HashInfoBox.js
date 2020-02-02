import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField'
import {hashFunctionProps} from './HashFunctionDefinitions'

function makeHashDurationText(duration, byteCount) {
  const hashDurationText = duration.toLocaleString(undefined, {
    maximumFractionDigits: 3
  })
  const nsPerByte = duration / byteCount * 1000000
  const nsPerByteText = nsPerByte.toLocaleString(undefined, {
    maximumFractionDigits: 3
  })
  return `Took ${hashDurationText} ms; ${nsPerByteText} ns/byte`
}

export function HashInfoBox(props) {
  const {bufferToHash, hashingFunctionName, worker, hashDefinitionIndex} = props
  const hashingFunctionAsync = hashFunctionProps[hashDefinitionIndex].hashingFunctionAsync

  const [hashText, setHashText] = React.useState("")

  const [willHashBuffer, setWillHashBuffer] = React.useState("")
  const [didHashBuffer, setDidHashBuffer] = React.useState("")

  const [bufferThatWasHashed, setBufferThatWasHashed] = React.useState(null)
  const [helperText, setHelperText] = React.useState("")

  console.log('bufferToHash')
  console.log(bufferToHash)
  if(bufferThatWasHashed === null
  || bufferThatWasHashed.length !== bufferToHash.length) {
    setBufferThatWasHashed(bufferToHash)
    setWillHashBuffer(bufferToHash)
    const hashingStartDate = performance.now()
    worker.postMessage({
      // hashFunction: hashingFunctionAsync,
      // hashDefinitionIndex,
      bufferToHash,
      hashingFunctionName
    })
    worker.onmessage = (e => {
      console.log('Worker: Message received from main script');
      const workerData = e.data
      if(workerData.hashingFunctionName !== hashingFunctionName) {
        return
      }
      if(!workerData.bufferToHash.equals(bufferToHash)) {
        return
      }

      const hashingEndDate = performance.now()
      const hashDuration = hashingEndDate - hashingStartDate
      const hashDurationText = makeHashDurationText(hashDuration, bufferToHash.length)
      setHashText(workerData.hash)
      setDidHashBuffer(bufferToHash)
      setHelperText(hashDurationText)
      // hashFunction().then((hash) => {
      //   postMessage({hash, bufferToHash, hashingFunctionName})
      // })
    })
    // hashingFunctionAsync(bufferToHash).then((hash) => {
    //   const hashingEndDate = performance.now()
    //   const hashDuration = hashingEndDate - hashingStartDate
    //   const hashDurationText = makeHashDurationText(hashDuration, bufferToHash.length)
    //   setHashText(hash)
    //   setDidHashBuffer(bufferToHash)
    //   setHelperText(hashDurationText)
    //   console.log(`${hashingFunctionName}: ${hash}`)
    // })
  }

  return (
    <div key={hashingFunctionName} style={{marginTop: '2em', marginBottom: '2em'}}>
      <TextField
        id="outlined-multiline-static"
        label={hashingFunctionName}
        multiline
        rows="4"
        value={hashText}
        variant="outlined"
        helperText={helperText}
        fullWidth
      />
    </div>
  )
}
