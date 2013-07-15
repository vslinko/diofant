max = (digits) ->
  maxDigit = null

  for item in digits
    digit = Number item

    if not maxDigit or digit > maxDigit
      maxDigit = digit

  maxDigit


module.exports = solution = ->
  string = "11"

  for i in [0 ... 8]
    digits = string.split ""

    maxDigit = String max(digits) + 1

    digits = digits.map (digit) ->
      maxDigit + digit

    string = digits.join("") + maxDigit

  Number string[299] + string[300]


solution.result = 79
