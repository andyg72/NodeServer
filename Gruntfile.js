module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      src: 'js/'
    },
    pkg: grunt.file.readJSON('package.json'),
    mocha_casperjs: {
      options: {
      },
      files: {
        src: 'test/**/*'
      }
    },
    express: {
      test: {
        options: {
          script: 'server.js'
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask('default', ['jshint', 'express:test', 'mocha_casperjs', 'express:test:stop']);
};