// express server
const PORT    = 3000;
const EPL_URL = 'http://api.football-data.org/v1/competitions/426/leagueTable';

var express    = require('express');
var app        = express();
var http       = require('http');
var server     = http.createServer(app);
var superagent = require('superagent');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  superagent.get(EPL_URL, function(getErr, getRes){
    if (getErr && !getErr.ok) {
      console.log('Error: trying to get epl table data - ' + getErr.status);
      res.render('pages/index', {data: 'ERROR' });
      return;
    }

    let eplData = JSON.parse(getRes.text);

    res.render('pages/index', {data: eplData});
  });
});

server.listen(PORT, 'localhost');
server.on('listening', function() {
  console.log('Premier League Table app listening on port %s!', PORT);
});
