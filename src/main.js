import React from 'react'
import ReactDOM from 'react-dom'
import foo from './foo'

const socket = io()

socket.on('reload', () => {
  location.reload()
})

const root = document.querySelector('main')


ReactDOM.render(<div></div>, root)
