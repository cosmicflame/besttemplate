//Load in the require.js config file
; require(['require-config'], function() {

	//Start the app
	require([
		'config'
		, 'app/app'
		, 'app/router'
		, 'app/views/navigation'
		, 'backbone'
		, 'jquery'
		, 'bootstrap'
	], function (config, App, Router, Navigation, Backbone, $) {

		//Create main app
		this.app = new App({
			el: $('.app')
		}).render()

		//Create navbar
		this.navigation = new Navigation({
			el: $('.navigation')
		}, {pages: this.app.pages}).render()

		//Create router
		this.router = new Router(this.app.pages)
		Backbone.history.start()

		//If we're not on a page yet, default to the Splashscreen page
		if (!this.router.currentPage) {
			this.router.navigate('page/splashscreen', {trigger: true})
		}
	})
});
