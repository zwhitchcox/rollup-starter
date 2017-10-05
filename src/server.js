import express from 'express'
import path from 'path'
import httpProxy from 'http-proxy'
import bodyParser from 'body-parser'
import config from '../conf/dev'
import { watch } from 'rollup'

const watcher = watch(config)
const app = express()
const server = app.listen(3000)
const io = require('socket.io')(server)
watcher.on('event', event => console.log(event.code) ||event.code === 'END' &&   io.sockets.emit('reload', 'reload'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('dist'))
app.use(express.static('static'))
