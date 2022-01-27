const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

app.get('/fred', function (req, res) {
    res.send('Hello Fred')
  })
  