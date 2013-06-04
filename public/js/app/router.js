define([
	'backbone'
	, 'pubsub'
	, 'underscore'
], function(Backbone, pubsub, _) {
	return Backbone.Router.extend({

		initialize: function(pages) {
			this.pages = pages
		},

		routes: {
			"page/:name": "navigateToPage"
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

				pubsub.pub('navigate:page', pageName)
			}
		}
	})
})
