var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});

var DockerCommand = require('./models/dockerCommand'),
    config = require('./config/config.development.json'),
    db = require('./lib/database');

var dockerCommandsRepository = require('./lib/dockerCommandsRepository');

var port = process.env.PORT || 3000;

// set up middleware
app.use(express.static('public'));

app.use(express.static('src/views'));

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/process_post', urlencodedParser, function (req, res) {
    var response = {
        firstName: req.body.firstName,
        surname: req.body.surname
    };

    console.log(response);
    res.end(JSON.stringify(response));
});

app.get('/', function (req, res) {
    console.log('opening database');
    db.init(config.databaseConfig);

    //dockerCommandsRepository.getDockerCommands(function(err, commands) {
    //  res.send(commands);
    //});
    console.log('called database');
});

app.listen(port, function () {
    console.log('example app listening on port ' + port + '!');

});