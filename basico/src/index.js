import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './components/Props'
// import Props from './components/Props'
// import Clock from './components/Clock'
// import State from "./components/State"
// import Clock2 from './components/Clock2'
// import Events from "./components/Events";
import Events2 from "./components/Events2";
import * as serviceWorker from './serviceWorker'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
  palette: {
    primary: green
  }
})
// ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<Props identificador="idDoObjeto" classe="destaque"/>, document.getElementById('root'))
// ReactDOM.render(<Clock />, document.getElementById('root'))
// ReactDOM.render(<State />, document.getElementById('root'))
// ReactDOM.render(<Clock2/>, document.getElementById('root'))
// ReactDOM.render(<Events/>, document.getElementById('root'))
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Events2/>
  </MuiThemeProvider>
  , document.getElementById('root'))


serviceWorker.register()
