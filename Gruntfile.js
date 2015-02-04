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
    }
  })

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-casperjs');

  grunt.registerTask('default', ['jshint', 'mocha_casperjs']);
};