; define([
	'backbone'
	, 'jquery'
	, 'underscore'
	, 'app/models/examplemodel'
	, 'text!templates/ajaxloader.html'
	, 'i18n!i18n/nls/bundle'
], function(Backbone, $, _, Model, template, i18n) {

	return Backbone.View.extend({

		template: _.template(template),

		initialize: function() {
			this.model = new Model()
		},

		render: function() {
			this.model.fetch().done(_.bind(function() {
				this.$el.html(this.template({
					guitarBrands: this.model.get('guitars')
					, ampBrands: this.model.get('amps')
					, i18n: i18n
				}))
			}, this))
			return this
		}
	})
});
