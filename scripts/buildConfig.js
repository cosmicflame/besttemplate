({
	appDir: "../webapp/",
	baseUrl: "js",
	dir: "../webapp_target",
	modules: [
		{
			name: "main",
			include: ['require-config', 'app']
		}
	]
	, mainConfigFile: '../webapp/js/require-config.js'
	, optimize: "uglify"
	, inlineText: true
})
