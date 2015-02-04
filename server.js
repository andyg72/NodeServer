var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'ejs');


app.get('/', function(request, response) {
  response.render('index', request.query);
});

app.get('/beverages', function(request, response) {
  response.json({"Tea":"Tetley"});
});

server.listen(9999, function() {
  console.log('Server is listening on port 9999');
});

module.exports = server;