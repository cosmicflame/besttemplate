; define([
	  "backbone"
	, "underscore"
	, "app/router"
	, 'config'
	, "text!templates/navigation.html"
	, 'i18n!i18n/nls/bundle'
], function(Backbone, _, router, config, template, i18n) {

	return Backbone.View.extend({

		template: _.template(template),

		initialize: function(attributes, options) {

			options = options || {}

			if (options.pages) {
				this.pages = options.pages
			}

			_.bindAll(this, 'selectPage')
			router.on('route:navigateToPage', _.bind(function(page) {
				this.selectPage(page)
			}, this))
		},

		render: function() {
			this.$el.html(this.template({
				  i18n: i18n
				, config: config
				, pages: this.pages
			}))
		},

		selectPage: function(page) {
			if(page) {
				_.each(this.$('li'), function(li) {
					$(li).removeClass('active')
				})

				this.$('a[href="#page/' + page + '"]').parent().addClass('active')
			}
		}
	})
});
