var nconf = require('nconf')

module.exports.attachHandlers = function(app) {
	app.get('/api/config', getConfig)
}

function getConfig(req, res) {
	res.send(nconf.get('public'))
}
