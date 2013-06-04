//Imports
var express = require('express')
var config = require('./config.json')

//Setup
var port = process.env.PORT || config.port //Should work on Heroku like this
var path = __dirname + "/" + config.dir
var app = express();

//Configure
app.configure(function(){
	app.use(express.static(path))
	app.use(express.logger())
})

//Start
app.listen(port, function() {
	console.log("Listening on " + port + " and serving files from " + path)
})
