
const express = require('express');

const app = express();

app.get('/', function(req,res) {
  console.log(`user visited ${req.url}`);
  res.end('Welcome to my site!');
});

app.get('/complement', function(req,res) {
  console.log(`user visited ${req.url}`);
  res.end('You look wonderful!');
});

const port = 3000;
console.log(`listening on http;//localhost:${port}`);
app.listen(port);
