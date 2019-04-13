const express = require('express');

const bodyParser = require('body-parser')

const app = express(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.send('oi')
})

require('./controllers/todoController')(app)

app.listen(2222)