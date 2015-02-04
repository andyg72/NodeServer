var express = require('express');
var app = express();
var server = require('http').createServer(app);
var gits = require('./gitusers');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/', function(request, response) {
  response.render('index', request.query);
});

app.get('/beverages', function(request, response) {
  response.json({"Tea":"Tetley"});
});

app.get('/gitusers', function(request, response) {
  response.render('gitusers', gits);
});

server.listen(9999, function() {
  console.log('Server is listening on port 9999');
});

module.exports = server;