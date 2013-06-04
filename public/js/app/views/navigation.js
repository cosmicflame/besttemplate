; define([
	"backbone"
	, "underscore"
	, 'pubsub'
	, "text!templates/navigation.html"
	, 'config'
	, 'i18n!i18n/nls/bundle'
], function(Backbone, _, pubsub, template, config, i18n) {

	return Backbone.View.extend({

		template: _.template(template),

		initialize: function(attributes, options) {

			options = options || {}

			if (options.pages) {
				this.pages = options.pages
			}

			_.bindAll(this, 'selectPage')
			pubsub.sub('navigate:page', this.selectPage)
		},

		render: function() {
			this.$el.html(this.template({
				  i18n: i18n
				, config: config
				, pages: this.pages
			}))
			return this
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
