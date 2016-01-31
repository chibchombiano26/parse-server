var express = require('express');
var ParseServer = require('parse-server').ParseServer;

var app = express();


// Specify the connection string for your mongodb database
// and the location to your Parse cloud code
var api = new ParseServer({
  databaseURI: 'mongodb://hefesoft:20101207@162.243.50.36:27017/dentiline',
  //cloud: '/home/myApp/cloud/main.js', // Provide an absolute path
  appId: 'hefesoft',
  fileKey: 'h123456',
  masterKey: 'h123456',
  clientKey: 'h123456',
  restAPIKey: 'h123456',
  javascriptKey: 'h123456',
  dotNetKey: 'h123456',
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

// Hello world
app.get('/', function(req, res) {
  res.status(200).send('Express is running here.');
});

var port = process.env.PORT || 1337;
app.listen(process.env.PORT, process.env.IP, function() {
  console.log('parse-server-example running on port ' + port + '.');
});