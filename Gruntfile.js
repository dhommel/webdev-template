module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
		files: ['Gruntfile.js', 'karma.conf.js', 'js/*.js', 'test/*.js'],
		options: {
			reporter: 'checkstyle',
			reporterOutput: 'report/jshint.xml'
		}
    },
	csslint: {
		src: ['css/*.css'],
		options: {
			import: 2,
			formatters: [
				{id: 'text', dest: 'report/csslint.txt'},
				{id: 'junit-xml', dest: 'report/csslint.xml'},
			]
		},		
	},
	karma: {
		unit: {
			configFile: 'karma.conf.js'
		}
	},
	watch: {
      files: ['<%= jshint.files %>', '<%= csslint.src %>'],
      tasks: ['jshint', 'csslint', 'test']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint', 'csslint', 'karma']);

  grunt.registerTask('default', ['test']);

};