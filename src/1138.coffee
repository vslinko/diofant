bigint = require "bigint"


MAX = 10000000


module.exports = solution = ->
  stringLength = 0
  zeroDigits = 0
  prime = bigint 0

  for i in [0 ... MAX]
    prime = prime.nextPrime()
    buffer = prime.toString()

    for s in [stringLength % 2 + 1 ... buffer.length] by 2
      if buffer[s] == "0"
        zeroDigits += 1

    stringLength += buffer.length

  zeroDigits


solution.result = 3237989
