const SYMBOLS = require('./symbols')

/**
 * Formats and returns the probabilities of encountering each symbol as a pretty
 * paragraph.
 * @param  {Object} probabilities
 * @return {string}
 */
module.exports = function (probabilities) {
  var string = ''
  const write = l => string = string + `${l}\n`

  write('Each door you flip over has...'.yellow.underline)

  probabilities.forEach(function ([letter, p], i) {
    const percentageColor = [ 'red', 'yellow', 'yellow', 'yellow', 'green' ][i]
    const percentage = `${Math.round(p * 100)}%`[percentageColor]
    write(`${percentage} chance of being a ${SYMBOLS[letter]}`)
  })

  return string
}
