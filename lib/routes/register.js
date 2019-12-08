const routes = require('express').Router()
import { SensorData } from '@/models/sensorData.js'
import moment from 'moment'

routes
  .post('/register', (req, res) => {
    console.log(req.body)

    if ('value' in req.body && 'id' in req.body) {
      console.log(moment(parseFloat(req.body.timestamp)).toDate())
      const data = new SensorData({
        source: req.body.id,
        value: parseInt(req.body.value),
        emitDate: moment(parseFloat(req.body.timestamp)).toDate()
      })

      data.save()
        .then(() => {
          res.status(200).json({
            statusCode: '200',
            data: 'OK'
          })
        })
        .catch(err => {
          console.log(err)
          res.status(500).json({
            statusCode: '500',
            data: {
              message: 'Error',
              reason: JSON.stringify(err)
            }
          })
        })
    }
  })

module.exports = routes
