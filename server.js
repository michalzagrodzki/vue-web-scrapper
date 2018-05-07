const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send(console.log('message from server'))
})

app.listen(process.env.PORT || 7080)