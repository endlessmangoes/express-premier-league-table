const PORT = 3000;
var express = require('express');
var app = express();
var routes = require('./routes/index.js');

var http  = require('http');
var server = http.createServer(app);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


routes(app);
//
// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/public/index.html')
// });
//
// app.post('/test', function (req, res) {
//   res.send({'test': 'foo'});
// });


server.listen(PORT, 'localhost');
server.on('listening', function () {
  console.log('Example app listening on port %s!', PORT)
});
