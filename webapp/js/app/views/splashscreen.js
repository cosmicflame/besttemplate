; define([
	'backbone'
	, 'jquery'
	, 'underscore'
	, 'config'
	, 'text!templates/splashscreen.html'
	, 'i18n!i18n/nls/bundle'
	, 'app/models/remoteConfig'
	], function(Backbone, $, _, config, template, i18n, remoteConfig) {

	return Backbone.View.extend({

		template: _.template(template),

		render: function() {

			//If the model hasn't loaded yet, fetch it and re-render this page on success
			if (!remoteConfig.loaded) remoteConfig.fetch({success: _.bind(this.render, this)})

			this.$el.html(this.template({
				name: config.app.name
				, version: config.app.version
				, i18n: i18n
				, remoteConfig: remoteConfig
			}));
		}
	})
});
