chai = require "chai"
path = require "path"
fs = require "fs"


chai.should()

problemsDirectory = path.join __dirname, "..", "src"
files = fs.readdirSync problemsDirectory

files.forEach (file) ->
  matches = /^(\d+)\.coffee$/.exec file

  if matches
    id = Number matches[1]
    problem = require path.join problemsDirectory, file

    describe "Problem ##{id} ", ->
      it "should be a function", ->
        problem.should.be.a "function"

      it "should have precalculated result", ->
        problem.should.have.property "result"

      it "should equal precalculated result", ->
        problem().should.equal problem.result
