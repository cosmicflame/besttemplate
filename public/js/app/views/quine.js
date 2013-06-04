define([
	'backbone'
	, 'text!app/views/quine.js'
], function(Backbone, code) {
	return Backbone.View.extend({

		//This is a view that loads itself using the Require.js text plugin
		//then renders itself to the page.

		render: function() {
			this.$el.html($(document.createElement('pre')).append(code))
			return this
		}
		/*Sorry, this isn't really anything to do with the framework
		* I'm just having fun now :)
		* (although this is an interesting example of what the Require.js text plugin can do...)
		*/
	})
})
