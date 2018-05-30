const express = require('express');
const router = express.Router();
const request = require('request')
const path = require('path');
const cors = require('cors')
const history = require('connect-history-api-fallback')
const Ch = require('cheerio');

const app = express();

app.use('*', function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Content-Type', 'text/html');
  next();
})

app.use('/', express.static(path.join(__dirname + '/dist')));

app.use(history())

app.get('/api', (req, res, next) =>{
  const url = req.query.q
  request(url, function(error, response, body){
    console.log('there is some error: ' + error)
    console.log('status code: ' + response && response.statusCode)
    res.send(body)
  });
})

console.log('Serving app at 7080')
app.listen(process.env.PORT || 7080);