bigint = require "bigint"


module.exports = solution = ->
  x = bigint 32
  x = x.pow 32
  x = x.add Math.pow 4, 4
  x = x.sub 1
  x = x.mul Math.pow 16, 16
  x = x.add Math.pow 8, 8
  x = x.sub 1

  x.toString(2).split("1").length - 1


solution.result = 33
