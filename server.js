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

app.get('/userdetails', function(request, response) {
  var propertyValueArray = [];
  for (var i = 0; i < gits.gitusers.length; i++) {
    propertyValueArray.push(gits.gitusers[i][request.query.property]);
  }
  response.render('userdetails', {data: propertyValueArray});
});

app.get('/userdetails/:property', function(request, response) {
  var property = request.params.property;
  var propertyValueArray = [];
  for (var i = 0; i < gits.gitusers.length; i++) {
    propertyValueArray.push(gits.gitusers[i][property]);
  }
  response.render('userdetails', {data: propertyValueArray});
});

server.listen(9999, function() {
  console.log('Server is listening on port 9999');
});

module.exports = server;