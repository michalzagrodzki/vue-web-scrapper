const express = require('express');
const request = require('request')
const path = require('path');
const cors = require('cors')
const Ch = require('cheerio');

const app = express();

app.use('/', express.static(path.join(__dirname + '/dist')));

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Content-Type', 'text/html');
  next();
})

app.get('/', cors(), (req, res) => {
  console.log(req)
  console.log('message from server');
  console.log(res);
  res.send(res);
});

console.log('Serving app at 7080')
app.listen(process.env.PORT || 7080);