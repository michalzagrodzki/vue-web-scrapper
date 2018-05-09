const express = require('express');
const path = require('path');
const cors = require('cors')
const Ch = require('cheerio');

const app = express();

app.use('/', express.static(path.join(__dirname + '/dist')));

app.get('/', cors(), (req, res) => {
  res.send(console.log('message from server'));
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(req);
});

console.log('Serving app at 7080')
app.listen(process.env.PORT || 7080);