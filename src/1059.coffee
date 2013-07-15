MIN = 0x10000
MAX = 0xFFFFF


fifthDigit = (number) ->
  number.toString(16)[4]


module.exports = solution = ->
  accepted = 0

  a = MIN

  for b in [a + 1 ... MAX]
    c = a + b

    if c > MAX
      break

    if fifthDigit(c) == "1"
      accepted += 1

  possible = accepted

  while possible > 0
    a += 1

    if fifthDigit(a) in ["1", "9"]
      possible -= 1

    accepted += possible

  accepted


solution.result = 13153165312
