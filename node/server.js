// Imports
var express = require('express')
var config = require('./config.json')
var nconf = require('nconf')

// Set up nconf
nconf.argv()
     .env()
     .file({ file: __dirname + "/config.json" })

var profile = nconf.get('server:profile')
var publicDir = __dirname + "/" + nconf.get('server:' + profile + '-dir')

// Setup
var app = express();

// Configure
app.configure(function() {
	app.use('/', express.static(publicDir))
	app.use(express.logger())
})

var routes = require('./routes')
routes.attachHandlers(app)

// Start
var port = nconf.get('PORT') || nconf.get('server:port')
app.listen(port, function() {
	console.log("Listening on " + port + " and serving files from " + publicDir)
})
