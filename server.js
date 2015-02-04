var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.get('/', function(request, response) {
  response.send('Hello World')
});

server.listen(9999, function() {
  console.log('Server is listening on port 9999');
});

module.exports = server;