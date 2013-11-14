module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	jasmine: {
		todo: {
			src: 'todo.js',
			options: {
				specs: 'test/spec/*Spec.js',
				vendor: [
				   'lib/jquery.js',
			       'lib/underscore.js',
			       'lib/backbone.js',
			       'lib/backbone.localStorage.js'
			    ],
			}
		}
	}
  });
  grunt.loadNpmTasks('grunt-contrib-jasmine');

};