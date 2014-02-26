var nconf = require('nconf')

// Args are top priority, followed by environment variables
nconf.argv().env()

// Figure out what environment we're running in
var env = nconf.get("NODE_ENV")
if (!env) {
	env = "development"
	nconf.set("NODE_ENV", env)
}

// Add environment specific config
nconf.add('user', {type: 'file', file: __dirname + "/" + env + "-config.json"})

// Add common config
nconf.add('global', { type: 'file', file: __dirname + "/common-config.json" })

module.exports = nconf
