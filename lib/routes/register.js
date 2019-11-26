const routes = require('express').Router()

routes
  .post('/register', (req, res) => {
    // console.log(req.body)
    res.status(200).json({
      statusCode: '200',
      data: 'OK'
    })
  })

module.exports = routes
