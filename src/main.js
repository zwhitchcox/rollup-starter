import './setup'
import React, { Component } from 'react'
import { render } from 'react-dom'
import Home from './home'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {green100, green500, green700} from 'material-ui/styles/colors'

const socket = io()
socket.on('reload', () => {
  location.reload()
})

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  },
}, {
  avatar: {
    borderColor: null,
  },
});

class App extends Component {
  render() {
    return <MuiThemeProvider muiTheme={muiTheme}>
      <Home />
    </MuiThemeProvider>
  }
}


render(<App />, document.querySelector('#app'))
