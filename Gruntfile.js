module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      dist: {
        files: ["src/**/*.*"],
        tasks: ['build']
      }
    },
    copy: {
      dist: {
        expand: true,
        cwd: 'src',
        src: ['**/jquery.slideview.*'],
        dest: 'dist/'
      },
      samples: {
        expand: true,
        cwd: 'src',
        src: ['js/jquery.slideview.js', 'css/jquery.slideview.css'],
        dest: 'samples/'
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/js/jquery.slideview.min.js': ['src/js/jquery.slideview.js']
        }
      }
    },
    connect: {
      samples: {
        options: {
          open: true,
          base: 'samples',
          port: 9000,
          livereload: true,
          keepalive: false,
          index: 'index.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['jshint']);
  
  grunt.registerTask('build', ['copy:samples', 'copy:dist', 'uglify:dist']);
  
  grunt.registerTask('serve', ['build', 'connect:samples', 'watch']);

};