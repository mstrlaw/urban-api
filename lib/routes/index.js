// import btoa from 'btoa'
const request = require('request')
const routes = require('express').Router()

const user = 'Unbabel'
const key = 'jcTMFt9BtYXzoneAmNoEhAqRKXGVGziC'
// const URL = 'http://langid.unbabel.com/classify'
const URL = `https://${user}:${key}@staging.langid.nlp.unbabel.com/classify`

routes
  .get('/', (req, res) => {
    res.status(200).json({
      statusCode: '200',
      data: 'OK'
    })
  })

routes
  .post('/langid', (req, res) => {
    // console.log(req.body)
    // const auth = btoa(`${user}:${key}`)
    // console.log(auth)

    request.post(URL, {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `ApiKey ${auth}`
      },
      json: {
        text: req.body.text
      }
    }, (error, langIdRes) => {
      console.log('#####response#######')
      console.log(langIdRes)
      if (error) {
        console.error(error)
        return
      }
      res.status(200).json({
        statusCode: '200',
        data: langIdRes.body
      })
    })
    
  })

module.exports = routes
