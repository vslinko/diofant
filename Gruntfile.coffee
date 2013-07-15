module.exports = (grunt) ->
  grunt.initConfig
    simplemocha:
      problems: "test/problems.coffee"
      options:
        reporter: process.env.REPORTER or "spec"
        grep: process.env.GREP or null
    coffeelint:
      examples: "src/**/*.coffee"
      test: "test/**/*.coffee"
      grunt: "Gruntfile.coffee"

  grunt.loadNpmTasks "grunt-simple-mocha"
  grunt.loadNpmTasks "grunt-coffeelint"

  grunt.registerTask "default", [
    "simplemocha:problems"
    "coffeelint"
  ]
