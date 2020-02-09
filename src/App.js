import React, {useState} from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'

import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import FilterListIcon from '@material-ui/icons/FilterList';
import {HashInfoBox} from './HashInfoBox'
import Dropzone from 'react-dropzone'
import {hashFunctionProps} from './HashFunctionDefinitions'
import HashWorker from './HashWorker.worker'
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub';
import Stats from './Stats'
import {CircularProgress, Paper} from '@material-ui/core'
import Chip from '@material-ui/core/Chip'
import DescriptionIcon from '@material-ui/icons/Description'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';
import PRizzTipAddresses from 'prizz-tip-addresses'
import Link from '@material-ui/core/Link'
import {formatBytes} from './Util'
import {MBToHashInput} from './MBToHashInput'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const hashWorker = new HashWorker() // FIXME: put in component mounted?

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  tipCode: {
    color: 'blue',
    overflowWrap: 'break-word'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  footerColumn: {
    flex: '1 1 auto',
    flexDirection: 'column',
    padding: 12,
    flexBasis: 1,
    minWidth: 400
  }
}))

function Footer() {
  const classes = useStyles()
  return (
    <footer style={{backgroundColor: '#F1F1FF', paddingTop: 30, paddingBottom: 30}}>
      <Container>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-even',
          alignItems: 'center'}}>
          <div className={classes.footerColumn} style={{}}>
            <Typography variant={'h6'}>
              Multi Hash
            </Typography>

            <p>
              Multi Hash is a webapp to quickly and easily
              generate common hashes with simple text, file, or random data.
            </p>
            <p>It is a <Link
              href={'https://developers.google.com/web/progressive-web-apps'}
              variant="button"
              color="primary"
              target="_blank"
              rel="noopener">
              Progressive Web App (PWA)
            </Link> that can run offline.</p>
            <p>All hashing is done in your browser and varies based on the strength of your processing power.</p>
            <p>It utilizes web workers for hashing to prevent the UI thread from being blocked.</p>
            <p>It displays basic hashing stats and speeds based on your in-browser performance.</p>
          </div>

          <div className={classes.footerColumn}>
            <p>Multi Hash was developed by
              <Button
                variant="contained"
                color="primary"
                href="https://github.com/pRizz/"
                target="_blank"
                rel="noopener"
                className={classes.button}
                style={{marginLeft: 12, marginRight: 12}}
                startIcon={<GitHubIcon/>}
              >
                @pRizz
              </Button>
            </p>
            <p>Copyright © 2020 Peter Ryszkiewicz</p>
            <p>Check out my other crypto projects at <Link
              href="https://www.prizzventuresllc.com"
              variant="button"
              target="_blank">www.prizzventuresllc.com</Link></p>
            <p className={classes.footerColumn}>
              <Link
                href="https://www.prizzventuresllc.com/PrivacyPolicy.txt"
                variant="button"
                color="primary"
                target="_blank"
                rel="noopener"
              >Privacy Policy</Link>
            </p>
          </div>

        </div>
        <div>
          <p>If you like these apps and want to support me making more, please consider tipping me at these
            addresses:</p>
          <div>
            IOTA: <code className={classes.tipCode}>{PRizzTipAddresses.IOTA}</code>
          </div>
          <div>
            NANO: <code className={classes.tipCode}>{PRizzTipAddresses.NANO}</code>
          </div>
          <div>
            BANANO: <code className={classes.tipCode}>{PRizzTipAddresses.BANANO}</code>
          </div>
          <div>
            ETH: <code className={classes.tipCode}>{PRizzTipAddresses.ETH}</code>
          </div>
          <div>
            BTC: <code className={classes.tipCode}>{PRizzTipAddresses.BTC}</code>
          </div>
          <div>
            Thanks for your support!
          </div>
        </div>

      </Container>

    </footer>
  )
}

function PrimarySearchAppBar(props) {
  const {onFilterValueChange} = props

  const classes = useStyles()

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon/>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Multi Hash
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <FilterListIcon/>
            </div>
            <InputBase
              placeholder="Filter (sha, blake, etc.)"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{'aria-label': 'filter-list'}}
              onChange={event => {
                onFilterValueChange(event.target.value)
              }}
            />
          </div>
          <IconButton
            href="https://github.com/pRizz/multi-hash"
            target="_blank"
            rel="noopener"
            variant="contained"
            className={classes.button}
            color="inherit"
            aria-label="source code"
          >
            <GitHubIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// from https://jsperf.com/utf-8-byte-length
// returns the byte length of a utf8 string
function byteLength(str) {
  let s = str.length
  for (let i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i)
    if (code > 0x7f && code <= 0x7ff) s++
    else if (code > 0x7ff && code <= 0xffff) s += 2
  }
  return s;
}

const randomDataModels = [
  {
    name: "10 KB",
    byteCount:  10 * 1e3
  },
  {
    name: "100 KB",
    byteCount: 100 * 1e3
  },
  {
    name: "1 MB",
    byteCount: 1e6
  },
  {
    name: "10 MB",
    byteCount: 10 * 1e6
  },
  {
    name: "100 MB",
    byteCount: 100 * 1e6
  },
  {
    name: "500 MB (slow)",
    byteCount: 500 * 1e6
  },
  {
    name: "1 GB (slow)",
    byteCount: 1e9
  }
]

function HashRandomDataButtons(props) {
  const {onDataToHash} = props

  return (
    <section style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
      {randomDataModels.map((randomDataModel) => {
        return <Button
          variant={'contained'}
          color={'primary'}
          key={randomDataModel.name}
          style={{margin: 8}}
          onClick={() => {
            onDataToHash(randomDataModel.byteCount)
          }}
        >
          {randomDataModel.name}
        </Button>
      })}
    </section>
  )
}

function HashInfos(props) {
  const {bufferToHash, filterText, onHashInfoData} = props

  return (
    hashFunctionProps.filter((hashFunctionProp) => {
      if (!filterText) {
        return true
      }
      return hashFunctionProp.hashingFunctionName.toLowerCase().includes(filterText.toLowerCase())
    }).map((hashFunctionProp, index) => {
      return <HashInfoBox
        key={hashFunctionProp.hashingFunctionName}
        bufferToHash={bufferToHash}
        worker={hashWorker}
        hashDefinitionIndex={index}
        onHashInfoData={onHashInfoData}
        {...hashFunctionProp} />
    })
  )
}

function bufferFromText(text) {
  return Buffer.from(new TextEncoder().encode(text))
}

let hasWorkerListener = false

function OrBreak() {
  return (
    <Typography variant={'h5'} style={{margin: 20}}>
      Or
    </Typography>
  )
}

function App() {
  const [textToHash, setTextToHash] = React.useState("")
  const [bufferToHash, setBufferToHash] = React.useState(Buffer.alloc(0))
  const [textToHashHelperText, setTextToHashHelperText] = React.useState(formatBytes(0))
  const [filterText, setFilterText] = React.useState("")
  const [fileToHashHelperText, setFileToHashHelperText] = React.useState("")
  const [jobQueueCount, setJobQueueCount] = React.useState(0)
  const [statsData, setStatsData] = React.useState([])
  const [statsDescription, setStatsDescription] = React.useState("")
  const [hashDoneSnackbarOpen, setHashDoneSnackbarOpen] = React.useState(false)
  const [waitingForRandomData, setWaitingForRandomData] = React.useState(false)

  const handleRandomData = (opts) => {
    const {byteCount, buffer} = opts
    console.log(byteCount)
    console.log(buffer)
    setWaitingForRandomData(false)
    handleRandomDataToHash(buffer)
  }

  if (!hasWorkerListener) {
    hasWorkerListener = true
    hashWorker.addEventListener('message', (e) => {
      const {jobQueueCount} = e.data
      if (e.data.type === "onRandomData") {
        return handleRandomData(e.data.opts)
      }
      if (jobQueueCount !== undefined) {
        setHashDoneSnackbarOpen(jobQueueCount === 0)
        setJobQueueCount(jobQueueCount)
      }
    })
  }

  const handleTextChange = event => {
    const text = event.target.value
    setTextToHash(text)
    setBufferToHash(bufferFromText(text))
    const byteCountFormatted = formatBytes(byteLength(text))
    setTextToHashHelperText(byteCountFormatted)
    setStatsDescription(`${formatBytes(byteLength(text))} of text`)
  }
  const handleFilterValueChange = (filterText) => {
    setFilterText(filterText)
  }

  const handleFileChange = fileInfo => {
    const {fileBuffer, fileName} = fileInfo
    setBufferToHash(Buffer.from(fileBuffer))
    setFileToHashHelperText(`${fileName}: ${formatBytes(fileBuffer.byteLength)}`)
    setStatsDescription(`${formatBytes(fileBuffer.byteLength)} of a file`)
  }

  /**
   * hashInfoData: {
   *   hashingFunctionName: "sha1",
   *   "duration (s)": 12,
   *   etc...
   * }
   */

  const handleHashInfoData = (hashInfoData) => {
    const currentHashInfoRow = statsData.findIndex((value, index, obj) => {
      return value.hashingFunctionName === hashInfoData.hashingFunctionName
    })
    if (currentHashInfoRow < 0) {
      statsData.push(hashInfoData)
      return
    }
    statsData.splice(currentHashInfoRow, 1, hashInfoData)
    setStatsData(statsData)
  }

  const handleRandomDataToHash = (dataBuffer) => {
    setBufferToHash(dataBuffer)
    setStatsDescription(`${formatBytes(dataBuffer.byteLength)} of random data`)
  }

  const isLoading = jobQueueCount > 0

  const handleHashDoneSnackbarClose = () => {
    setHashDoneSnackbarOpen(false)
  }

  const handleRandomDataButtonPressed = (byteCount) => {
    setWaitingForRandomData(true)
    hashWorker.postMessage({
      type: 'onGetRandomData',
      opts: {
        byteCount
      }
    })
  }

  const hashesTitle = isLoading ? `Hashing ${statsDescription} | Job queue count: ${jobQueueCount}` : `Hashes for ${statsDescription || 'null value'}`

  return (
    <div className="App">
      <CssBaseline/>
      <PrimarySearchAppBar onFilterValueChange={handleFilterValueChange}/>
      <Container maxWidth="md">
        <br/>
        <TextField
          id="outlined-multiline-static"
          label="Text To Hash"
          multiline
          rows="4"
          value={textToHash}
          onChange={handleTextChange}
          variant="outlined"
          helperText={textToHashHelperText}
          fullWidth
        />

        <OrBreak/>

        <Dropzone onDrop={(acceptedFiles) => {
          acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            reader.onload = () => {
              handleFileChange({
                fileBuffer: reader.result,
                fileName: file.name
              })
            }
            reader.readAsArrayBuffer(file)
          })
        }}>
          {({getRootProps, getInputProps}) => (
            <section style={{border: 'dashed gray', borderColor: (fileToHashHelperText ? 'blue' : 'gray')}}>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p style={{fontSize: 30, paddingTop: 50, margin: 0, paddingLeft: 30, paddingRight: 30}}>Drag 'n' drop a file here, or click to select a file</p>
                <p style={{fontSize: 30, margin: 4}}>(hashing is done locally)</p>
                {fileToHashHelperText && <Chip
                  icon={<DescriptionIcon></DescriptionIcon>}
                  label={fileToHashHelperText}
                  clickable
                  color="primary"
                  style={{marginTop: 20}}
                />}
                <div style={{height: 50}}></div>
              </div>
            </section>
          )}
        </Dropzone>

        <OrBreak/>

        <Typography variant={'h4'}>
          Random Data
        </Typography>

        <HashRandomDataButtons onDataToHash={handleRandomDataButtonPressed}/>

        {waitingForRandomData && <Typography variant={'h5'} style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 12,
          textAlign: "center"
        }}>
          Generating Random Data
          <CircularProgress
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              margin: 8
            }}/>
        </Typography>}

        <OrBreak/>

        <Typography variant={'h5'} style={{margin: 8}}>
          Custom Size Random Data
        </Typography>
        <MBToHashInput onDataToHash={handleRandomDataButtonPressed}/>

        <div style={{height: '3em'}}/>

        <Typography variant={'h3'}>
          {hashesTitle}
        </Typography>
        {isLoading && <CircularProgress style={{margin: 20}} />}

        <HashInfos bufferToHash={bufferToHash}
                   filterText={filterText}
                   onHashInfoData={handleHashInfoData}
        />

        <Stats
          statsDescription={statsDescription}
          data={statsData}
          isLoading={isLoading}
        />

        <Snackbar open={hashDoneSnackbarOpen} autoHideDuration={3000} onClose={handleHashDoneSnackbarClose}>
          <Alert onClose={handleHashDoneSnackbarClose} severity="success">
            Done hashing!
          </Alert>
        </Snackbar>

      </Container>

      <Footer/>
    </div>
  );
}

export default App;
