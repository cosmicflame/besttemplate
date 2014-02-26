// Imports
var express = require('express')
var config = require('./config/config.json')
var nconf = require('nconf')

// Set up nconf
nconf.argv()
     .env()
     .file({ file: __dirname + "/config.json" })

// Setup
var app = express();

// Check if we're getting NODE_ENV from another source (e.g. argv, config file)
var env = nconf.get('NODE_ENV')
if (env) app.settings.env = env

// Use environment to select static files directory
var profile = app.settings.env
var publicDir = __dirname + "/" + nconf.get('server:directory:' + profile)

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
