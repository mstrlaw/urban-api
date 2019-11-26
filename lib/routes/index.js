const routes = require('express').Router()

routes
  .get('/', (req, res) => {
    res.status(200).json({
      statusCode: '200',
      data: 'OK'
    })
  })

module.exports = routes
