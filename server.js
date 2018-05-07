const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname + '/dist')));

app.get('/', (req, res) => {
  res.send(console.log('message from server'));
  res.send(req)
});

console.log('Serving app at 7080')
app.listen(process.env.PORT || 7080);