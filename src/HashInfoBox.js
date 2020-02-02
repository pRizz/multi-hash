import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField'

function bufferFromTextOrBuffer(textOrBuffer) {
  const buffer = new TextEncoder('utf-8').encode(textOrBuffer)
  // FIXME
  return buffer
}

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
  const {textOrValueToHash, hashingFunctionAsync, hashingFunctionName} = props

  const [hashText, setHashText] = React.useState("")
  const [textThatWasHashed, setTextThatWasHashed] = React.useState("")
  const [helperText, setHelperText] = React.useState("")
  const bufferToHash = bufferFromTextOrBuffer(textOrValueToHash)

  if(textOrValueToHash !== textThatWasHashed) {
    setTextThatWasHashed(textOrValueToHash)
    const hashingStartDate = performance.now()
    hashingFunctionAsync(bufferToHash).then((hash) => {
      const hashingEndDate = performance.now()
      const hashDuration = hashingEndDate - hashingStartDate
      setHelperText(makeHashDurationText(hashDuration, bufferToHash.length))
      setHashText(hash)
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
