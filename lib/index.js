import '@/config.js'

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const indexRoutes = require('./routes/index.js')
const apiRoutes = require('./routes/register.js')

const app = express()

var port = 8181

app.use(cors())

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Parse application/json
app.use(bodyParser.json())

app.use('/', indexRoutes)
app.use('/api/', apiRoutes)

let serverInstance = require('http').createServer(app)

serverInstance.listen(port)

console.log('\n[SRVR] ✔ OK: Server Running')
