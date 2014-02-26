define([
	'backbone'
	, 'underscore'
], function(Backbone, _) {
	var Router = Backbone.Router.extend({
		routes: {
			"page/:name": "navigateToPage"
		}
	})

	//Singleton
	return new Router()
})
