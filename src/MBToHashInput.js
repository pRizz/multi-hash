import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {formatBytes} from './Util'

export function MBToHashInput(props) {
  const {onDataToHash} = props

  const [mbToHash, setMBToHash] = useState(NaN)
  const [textToHashHelperText, setTextToHashHelperText] = React.useState(formatBytes(0))

  const handleMBToHashText = (e) => {
    try {
      const mbToHash = parseInt(e.target.value)
      const bytesToHash = mbToHash * 1e6
      setMBToHash(mbToHash)
      setTextToHashHelperText(formatBytes(bytesToHash))
    } catch (e) {
      setMBToHash(NaN)
      setTextToHashHelperText("N/A")
    }
  }

  return (
    <section style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
      <TextField
        id="outlined-multiline-static"
        label="MB To Hash"
        rows="1"
        onChange={handleMBToHashText}
        variant="outlined"
        helperText={textToHashHelperText}
        fullWidth
      />
      <Button
        variant={'contained'}
        color={'primary'}
        disabled={isNaN(mbToHash)}
        style={{margin: 8}}
        onClick={() => {
          onDataToHash(mbToHash * 1e6)
        }}
      >
        Hash {mbToHash} MB
      </Button>
    </section>
  )
}
