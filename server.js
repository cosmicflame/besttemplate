// Config
var nconf = require('./config')

// Imports
var express = require('express')

// Setup
var app = express();

// Get webapp directory for static-serving of files
var publicDir = __dirname + "/" + nconf.get('server:webappDirectory')

// Configure middleware
app.configure(function() {
	app.use('/', express.static(publicDir))
	app.use(express.logger())
})

// Attach routes
var routes = require('./routes')
routes.attachHandlers(app)

// Start
var port = nconf.get('PORT') || nconf.get('server:port')
app.listen(port, function() {
	console.log("Listening on " + port + " and serving files from " + publicDir + ' in ' + nconf.get('NODE_ENV') + ' mode')
})
