'use strict';
var dataRepository = require('./lib/dockerCommandsRepository'),
  config = require('./config/config.development.json'),
  db = require('./lib/database');

db.init(config.databaseConfig);

console.log('retrieving Data');
dataRepository.getDockerCommands(function (err, commands) {
  if (err) {
    console.log(err);
  } else {
    console.log('Data Retrieved!');
    console.log(commands);
  }
});
