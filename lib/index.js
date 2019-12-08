import '@/config.js'

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const mongoose = require('mongoose')
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

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_URL}:27017/urban_db?authSource=admin`,
    { useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .catch((err) => {
      console.log('[SERVER ERROR] ✗ Error on DB connection @')
      console.log('----------------------------------------------- Log Start ')
      console.log('-- Name:\t' + err.name)
      console.log('-- CodeName:\t' + err.codeName)
      console.log('-- Message:\t' + err.message)
      console.log('----------------------------------------------- Log End ')
    })
}
else {
  mongoose.connect('mongodb://localhost/urban_db')
}


serverInstance.listen(port)

console.log('\n[SRVR] ✔ OK: Server Running')
