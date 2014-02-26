//Load in the require.js config file
require([
	'require-config'
], function(conf) {

	require(['app'], function() {
		new App()
	})
})
