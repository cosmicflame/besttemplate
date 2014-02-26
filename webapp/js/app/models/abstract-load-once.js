define([
	'backbone'
], function(Backbone) {
	return Backbone.Model.extend({

		  loaded: false

		, initialize: function() {
			this.on('change', function() {
				this.loaded = true
			})
		}

	})
})
