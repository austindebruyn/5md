const SYMBOLS = require('./symbols')

module.exports = function (symbols) {
  var string = ''
  const write = l => string = string + `${l}\n`

  write('In total, you can expect to see about...'.yellow.underline)
  symbols.forEach(function ([letter, c]) {
    write(`${c.toLocaleString('en-us', {minimumFractionDigits: 2}).yellow}.................${SYMBOLS[letter]}`)
  })

  return string
}
