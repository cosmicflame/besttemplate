//Load in the require.js config file
require([
	'require-config'
	, 'app'
], function(conf, App) {
	new App()
})
