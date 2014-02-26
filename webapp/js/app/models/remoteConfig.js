; define([
	'app/models/abstract-load-once'
], function(ALO) {

	var RemoteConfig = ALO.extend({
		url: './api/config'
	})

	//Singleton
	return new RemoteConfig()
});
