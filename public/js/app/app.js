; define([
	"backbone"
	, "underscore"
	, 'app/router'
	, 'app/views/splashscreen'
], function(Backbone, _, router, Splashscreen) {

	return Backbone.View.extend({

		initialize: function() {

			//Create all child pages
			this.pages = [
				{
					view: new Splashscreen()
					, route: "splashscreen"
					, icon: 'icon-home'
					, label: 'pages.splashscreen'
				}
			]

			router.on('route:navigateToPage', _.bind(function(page) {
				this.navigateToPage(page)
			}, this))
		},

		render: function() {
			//Render each child page
			_.each(this.pages, _.bind(function(page) {
				this.$el.append(page.view.render().$el)
				page.view.$el.hide()
			}, this))
			return this
		},

		navigateToPage: function(pageName) {
			var page = _.find(this.pages, function(page) {
				return page.route === pageName
			})

			if (page) {
				if (this.currentPage) {
					this.currentPage.view.$el.hide()
				}
				this.currentPage = page
				page.view.$el.show()
			}
		}
	})
});
