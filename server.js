const express = require('express');
const path = require('path');
const cors = require('cors')
const Ch = require('cheerio');

const app = express();

app.use('/', express.static(path.join(__dirname + '/dist')));

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

app.get('/', cors(), (req, res) => {
  res.send(console.log('message from server'));
  res.send(res);
});

console.log('Serving app at 7080')
app.listen(process.env.PORT || 7080);