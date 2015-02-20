exec = require('child_process').exec

module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.initConfig
    watch:
      coffee:
        files: ['../**/*.coffee']
      sass:
        files: 'public/d/sass/screen.sass'
      static:
        files: ['public/d/**/*.css',
                'public/**/*.html',
                'public/**/*.js',
                'public_test/**/*.js'],
        options:
          livereload: true

  exec_callback = (error, stdout, stderr)->
    if error
      console.log('exec error: ' + error)

  grunt.event.on 'watch', (event, file, ext)->
    if ext == 'coffee'
#      console.info("compiling: #{file}")
      exec("coffee -c #{file}", exec_callback)
    if ext == 'sass'
#      console.info("compiling: #{file}")
      exec("cd public/d && compass compile --sourcemap sass/screen.sass", exec_callback)

  grunt.registerTask('default', ['watch'])