; define([
	"backbone"
	, "underscore"
	, 'app/router'
	, 'app/views/splashscreen'
	, 'app/views/ajaxloader'
	, 'app/views/quine'
], function(Backbone, _, Router, Splashscreen, AjaxLoader, Quine) {

	return Backbone.View.extend({

		initialize: function() {

			//Create all child pages
			this.pages = [
				{
					view: new Splashscreen()
					, route: "splashscreen"
					, icon: 'icon-home'
					, label: 'pages.splashscreen'
				},
				{
					view: new AjaxLoader()
					, route: 'ajaxloader'
					, icon: 'icon-cog'
					, label: 'pages.ajaxloader'
				},
				{
					view: new Quine()
					, route: 'quine'
					, icon: 'icon-refresh'
					, label: 'pages.quine'
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
