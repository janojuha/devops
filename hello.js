
// This application uses express as it's web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();
app.use(express.static('public'));
// serve the files out of ./public as our main files

/*
app.get('/', function (req, res) {
  res.render('home', {title: "hello World!"});
});
*/
app.get('/', function (req, res){
	var r = require('./views/mainView');
	res.send(r.getContent());	
});
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, appEnv.bind, function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});