import React from 'react';
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
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import FilterListIcon from '@material-ui/icons/FilterList';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {HashInfoBox} from './HashInfoBox'
import Dropzone from 'react-dropzone'
import {hashFunctionProps} from './HashFunctionDefinitions'
import HashWorker from './HashWorker.worker'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import GitHubIcon from '@material-ui/icons/GitHub';

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
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function PrimarySearchAppBar(props) {
  const {onFilterValueChange} = props

  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      id={menuId}
      keepMounted
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon/>
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon/>
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle/>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

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
          <div className={classes.grow}/>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon/>
            </IconButton>
          </div>
          <Button
            href="https://github.com/pRizz/multi-hash"
            target="_blank"
            rel="noopener"
            variant="contained"
            className={classes.button}
            startIcon={<GitHubIcon />}
          >
            Source Code
          </Button>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

// https://en.wikipedia.org/wiki/Orders_of_magnitude_(data)
// [1000^value, prefix]
const byteFormatterList = [
  [8, 'Y'],
  [7, 'Z'],
  [6, 'E'],
  [5, 'P'],
  [4, 'T'],
  [3, 'G'],
  [2, 'M'],
  [1, 'k'],
].map((byteArgs) => {
  return {
    minValue: Math.pow(1000, byteArgs[0]),
    prefix: byteArgs[1]
  }
})

// https://en.wikipedia.org/wiki/Orders_of_magnitude_(data)
// converts the input (number of bytes) to a human readable number, like 500 bytes or 3.5 MB
function formatBytes(numberOfBytes) {
  for (const byteFormat of byteFormatterList) {
    if (numberOfBytes >= byteFormat.minValue) {
      return `${(numberOfBytes / byteFormat.minValue).toLocaleString(undefined, {
        maximumFractionDigits: 3
      })} ${byteFormat.prefix}B`
    }
  }
  return `${numberOfBytes} bytes`
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

function HashInfos(props) {
  const {bufferToHash, filterText} = props

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
        {...hashFunctionProp} />
    })
  )
}

function bufferFromText(text) {
  return Buffer.from(new TextEncoder().encode(text))
}

let hasWorkerListener = false

function App() {
  const [textToHash, setTextToHash] = React.useState("")
  const [bufferToHash, setBufferToHash] = React.useState(Buffer.alloc(0))
  const [textToHashHelperText, setTextToHashHelperText] = React.useState(formatBytes(0))
  const [filterText, setFilterText] = React.useState("")
  const [fileToHashHelperText, setFileToHashHelperText] = React.useState("")
  const [jobQueueCount, setJobQueueCount] = React.useState(0)

  if(!hasWorkerListener) {
    hasWorkerListener = true
    hashWorker.addEventListener('message', (e) => {
      const {jobQueueCount} = e.data
      if(jobQueueCount !== undefined) {
        setJobQueueCount(jobQueueCount)
      }
    })
  }

  const handleTextChange = event => {
    const text = event.target.value
    setTextToHash(text)
    setBufferToHash(bufferFromText(text))
    setTextToHashHelperText(formatBytes(byteLength(text)))
  }
  const handleFilterValueChange = (filterText) => {
    setFilterText(filterText)
  }

  const handleFileChange = fileBuffer => {
    console.log('handleFileChange')
    console.log(fileBuffer)
    console.log(fileBuffer.byteLength)
    setBufferToHash(Buffer.from(fileBuffer))
    setFileToHashHelperText(formatBytes(fileBuffer.byteLength))
  }

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
        <h2>
          Or
        </h2>
        <Dropzone onDrop={(acceptedFiles) => {
          acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            reader.onload = () => {
              handleFileChange(reader.result)
            }
            reader.readAsArrayBuffer(file)
          })
        }}>
          {({getRootProps, getInputProps}) => (
            <section style={{border: 'dashed gray'}}>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p style={{fontSize: 30, padding: 50, margin: 0}}>Drag 'n' drop a file here, or click to select a file</p>
              </div>
            </section>
          )}
        </Dropzone>
        <div>
          {fileToHashHelperText}
        </div>

        <br />

        <h2>
          Hash job queue count: {jobQueueCount}
        </h2>

        <HashInfos bufferToHash={bufferToHash}
                   filterText={filterText}/>
      </Container>
    </div>
  );
}

export default App;
