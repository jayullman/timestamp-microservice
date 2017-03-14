var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Home');
});

app.listen(3000, () => {
  console.log('app is listening on port 3000');
});