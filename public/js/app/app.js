; define([
	"backbone"
	, "underscore"
	, 'app/router'
	, 'app/views/splashscreen'
], function(Backbone, _, Router, Splashscreen) {

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
		},

		render: function() {
			//Render each child page
			_.each(this.pages, _.bind(function(page) {
				this.$el.append(page.view.render().$el)
				page.view.$el.hide()
			}, this))
			return this
		}
	})
});
