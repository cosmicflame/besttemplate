; define([
	'backbone'
	, 'jquery'
	, 'underscore'
	, 'config'
	, 'text!templates/splashscreen.html'
	, 'i18n!i18n/nls/bundle'
	], function(backbone, $, _, config, template, i18n) {

	return Backbone.View.extend({

		template: _.template(template),

		render: function() {
			this.$el.html(this.template({
				name: config.app.name
				, version: config.app.version
				, i18n: i18n
			}));
			return this
		}
	})
});
