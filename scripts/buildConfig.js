({
	appDir: "../webapp/",
	baseUrl: "js",
	dir: "../webapp_target",
	modules: [
		{
			name: "main"
		}
	]
	, mainConfigFile: '../webapp/js/require-config.js'
	, optimize: "uglify"
	, inlineText: true
})
