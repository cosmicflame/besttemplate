({
	appDir: "../public/",
	baseUrl: "js",
	dir: "../target",
	modules: [
		{
			name: "main"
		}
	]
	, mainConfigFile: '../public/js/require-config.js'
	, optimize: "uglify"
	, inlineText: true
})
