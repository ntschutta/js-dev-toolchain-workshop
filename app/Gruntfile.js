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
			    ]
			}
		}
	},
	jshint: {
        files: ['todos.js'],
        options: {
		   eqeqeq: true,
           globals: {
	         jQuery: true,
	       }
        }
    },

    plato: {
	  task: {
        files: {
          'report': ['todos.js'],
        }
      }
    },
	
	uglify: {
	  options: {
	    banner: '/*! todos.js <%= grunt.template.today("dd-mm-yyyy") %> */\n'
	  },
	  dist: {
	    files: {
	      'dist/todos-min.js': ['todos.js']
	    }
	  }
	},
  });
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-plato');
  grunt.loadNpmTasks('grunt-contrib-uglify');
};