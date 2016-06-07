'use string';
var DockerCommand = require('../models/dockerCommand');

var dataInitializer = function() {
    var initializeData = function(errorCallback){
        var runDockerCommand = new DockerCommand(
            {
               command:'run',
               description:'runs a docker command',
               examples:[
                   {
                        example: 'docker run imageName',
                        description: 'creates a running container'    
                   },
                   {
                       example:'docker run -d -p 8080:3000 imageName',
                       description: 'runs a command in "daemon mode"'
                   }
               ] 
            });
         runDockerCommand.save(function(err) {
             console.log('saved docker command')
            if (err) {
                return errorCallback(err);
            }
         });   
        
    }
    
    return {
        initializeData : initializeData,
    };
}();


module.exports = dataInitializer;