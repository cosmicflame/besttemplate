//Load in the require.js config file
require([
	'require-config'
], function(requireConfig) {

	require(['app'], function(app) {
		// This function left deliberately blank - app executes at require-time.
	})
})
