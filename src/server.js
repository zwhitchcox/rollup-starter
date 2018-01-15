import express from 'express'
import path from 'path'
import httpProxy from 'http-proxy'
import bodyParser from 'body-parser'
import config from '../conf/dev'
import { rollup } from 'rollup'
import gaze from 'gaze'

const app = express()
const server = app.listen(3000)
const io = require('socket.io')(server)
build()
gaze(['src/**', 'static/**'], function() {
    this.on('all', build)
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('dist'))
app.use(express.static('static'))

let cache;
function build() {
    rollup({cache, entry: config.input, ...config})
      .then(bundle => (cache = bundle) && bundle.write({...config, ...config.output}))
      .then(() => io.sockets.emit('reload'))
      .catch(console.error)
}
