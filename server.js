const express = require('express');
const router = express.Router();
const request = require('request')
const path = require('path');
const cors = require('cors')
const history = require('connect-history-api-fallback')
const cheerio = require('cheerio');

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
  request(url, function(error, response, html){
    if (error) { 
      console.log('there is some error: ' + error) 
    } else if (!error && response.statusCode == 200) {
      let result = []
      let Ch = cheerio.load(html)
      Ch('head').remove()
      Ch('script').remove()
      /*Ch('div .div-col .columns .column-width').each(function(i, elem){
        result[i] = Ch(this)
      })*/
      res.send(Ch.html())
    }
  });
})

console.log('Serving app at 7080')
app.listen(process.env.PORT || 7080);