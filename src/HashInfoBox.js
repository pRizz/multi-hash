import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField'

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
  const {bufferToHash, hashingFunctionAsync, hashingFunctionName} = props

  const [hashText, setHashText] = React.useState("")
  const [bufferThatWasHashed, setBufferThatWasHashed] = React.useState(null)
  const [helperText, setHelperText] = React.useState("")

  console.log('bufferToHash')
  console.log(bufferToHash)
  if(bufferThatWasHashed === null
  || bufferThatWasHashed.length !== bufferToHash.length) {
    setBufferThatWasHashed(bufferToHash)
    const hashingStartDate = performance.now()
    hashingFunctionAsync(bufferToHash).then((hash) => {
      const hashingEndDate = performance.now()
      const hashDuration = hashingEndDate - hashingStartDate
      const hashDurationText = makeHashDurationText(hashDuration, bufferToHash.length)
      setHashText(hash)
      setHelperText(hashDurationText)
      console.log(`${hashingFunctionName}: ${hash}`)
    })
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
