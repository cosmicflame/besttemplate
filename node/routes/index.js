var fs = require('fs')
var _ = require('underscore')

module.exports.attachHandlers = function(app) {
	var files = fs.readdirSync('./routes')
	var routes = _.reject(files, function(file) {
		return file === 'index.js'
	})
	_.each(routes, function(route) {
		var jsRoute = require('./' + route.replace('.js', ''))
		jsRoute.attachHandlers(app)
	})
}
