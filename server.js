
const express = require('express');
const path = require('path');

const app = express();

const complements = [
  "You look nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/complement', function(req,res) {
  res.json({ complement: random(complements) }).end();
});

function random(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

app.use('/public', express.static('./public'));

const port = 3000;
console.log(`listening on http;//localhost:${port}`);
app.listen(port);

console.log(__dirname);
