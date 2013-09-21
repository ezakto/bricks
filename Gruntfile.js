/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
      ' Licensed under <%= _.pluck(pkg.licenses, "type").join(", ") || pkg.license %> */\n',
    // Task configuration.
    clean: {
      dist: ['dist']
    },
    stylus: {
      compile: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          'dist/css/bricks.css': 'stylus/index.styl'
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  // Default task.
  grunt.registerTask('default', ['clean', 'stylus']);

};
