// Karma configuration
// Generated on Sun Aug 02 2015 16:48:38 GMT-0300 (BRT)

module.exports = function(config) {
	
	// retrieve main files from bower
  var wiredep = require('wiredep');
  var bowerFiles = wiredep({devDependencies: true}).js;

  config.set({

	// base path that will be used to resolve all patterns (eg. files, exclude)
	basePath: './',


	// frameworks to use
	// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
	frameworks: ['jasmine'],

	  angularFilesort: {
		  whitelist: [
			  'app/**/*.js'
		  ]
	  },

	// list of files / patterns to load in the browser
	files: bowerFiles.concat([
		'app/blocks/blocks.router.js',
		'app/editor/editor.module.js',
		'app/editor/editor.routes.js',
		'app/editor/editor.controller.js',
		'app/app.js',
		'app/app.routes.js',
		'test/**/*.js'
	]),


	// list of files to exclude
	exclude: [
	],


	// preprocess matching files before serving them to the browser
	// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
	preprocessors: {
		"app/**/*.js": ["coverage"]
	},


	// test results reporter to use
	// possible values: 'dots', 'progress'
	// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	reporters: ["mocha", "coverage"],


	// web server port
	port: 9876,


	// enable / disable colors in the output (reporters and logs)
	colors: true,


	// level of logging
	// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	logLevel: config.LOG_INFO,


	// enable / disable watching file and executing tests whenever any file changes
	autoWatch: true,

	
	// start these browsers
	// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
	browsers: ['PhantomJS'],


	// Continuous Integration mode
	// if true, Karma captures browsers, runs the tests and exits
	singleRun: false
  })
}
