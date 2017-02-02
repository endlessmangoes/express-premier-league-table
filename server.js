const PORT = 3000;
const EPL_URL = 'http://api.football-data.org/v1/competitions/426/leagueTable';

var express = require('express');
var app = express();
var superagent = require('superagent');
var http  = require('http');
var server = http.createServer(app);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  superagent.get(EPL_URL, function(getErr, getRes){
      let eplData = JSON.parse(getRes.text);


      res.render('pages/index', {data: eplData});
    });
});

server.listen(PORT, 'localhost');
server.on('listening', function () {
  console.log('Example app listening on port %s!', PORT)
});
