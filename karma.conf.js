module.exports = function(config) {

  config.set({
    basePath: '',
    frameworks: ['requirejs', 'mocha', 'chai', 'sinon'],
    files: [
      'test/test-main.js',
      {pattern: 'js/*.js', included: false},
      {pattern: 'test/*Spec.js', included: false}
    ],
	preprocessors: {
		'js/*.js': 'coverage',
		'test/*Spec.js': 'coverage'
	},
    reporters: ['progress', 'coverage'],
	coverageReporter: {
		reporters: [
			{type: 'html', dir: 'report/coverage-hmtl'},
			{type: 'cobertura', dir: 'report/coverage-xml'}
		]
	},
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome', 'Firefox', 'IE'],
    captureTimeout: 60000,
    singleRun: true
  });
  
};
