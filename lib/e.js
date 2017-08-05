const bosses = require('./bosses')
const { challenges, doors } = require('./doors')
const map = require('lodash/fp/map')
const filter = require('lodash/fp/filter')
const reduce = require('lodash/fp/reduce')
const flatten = require('lodash/fp/flatten')
const mapValues = require('lodash/fp/mapValues')
const zipObject = require('lodash/fp/zipObject')
const fromPairs = require('lodash/fp/fromPairs')
const sumBy = require('lodash/fp/sumBy')
const flow = require('lodash/fp/flow')

/**
 * Returns an empty count of symbols that looks like {A: 0, S: 0, H: 0, J: 0, R: 0}.
 * @return {Object}
 */
function zeroSymbols() {
  return zipObject('ASHRJ')([0, 0, 0, 0, 0])
}

/**
 * Returns a symbol count for a text string, so 'AHA' would return {A: 2, H: 1}.
 * @param  {String}
 * @return {Object}
 */
function textToSymbolCount(string) {
  return flow(
    reduce((a, v) => { a[v]++; return a }, zeroSymbols())
  )(string)
}

/**
 * Returns a summed object of counts that is the sum of all symbols of the
 * objects passed in.
 * If [{ A: 1, J: 2 }, { A: 3, J: 7 }] is passed in, then {A:4, J:9} will be
 * returned.
 * @param  {Array<Object>} counts
 * @return {Object}
 */
function sumSymbolCounts(counts) {
  return flow(
    map(l => [l, sumBy(l)(counts) || 0]),
    fromPairs
  )('ASHRJ')
}

/**
 * The expected value of the symbols on any regular door is a histogram of all
 * symbols on all regular doors meaned over the count.
 * @example { A: 0.475, S: 0.525, H: 0.575, R: 0.55, J: 0.6 }
 */
const E_SYMBOLS_ON_REGULAR_DOOR = flow(
  map(d => d.symbols.split('')),
  flatten,
  textToSymbolCount,
  mapValues(v => v / doors.all().length)
)(doors.all())

/**
 * The expected value of the symbols on any challenge door is a histogram of all
 * symbols on all challenges doors meaned over the count.
 * Some challenge doors are events and have no symbols, so filter those out
 * first.
 * @example { A: 0.15, S: 0.15, H: 0.15, R: 0.125, J: 0.15 }
 */
const E_SYMBOLS_ON_CHALLENGE_DOOR = flow(
  filter(d => d.symbols),
  map(d => d.symbols.split('')),
  flatten,
  textToSymbolCount,
  mapValues(v => v / challenges.all().length)
)(challenges.all())

/**
 * Returns the expected count of symbols on each door flipped over.
 * @param  {number} dungeonNumber  1...5
 * @param  {number} characterCount 2...5
 * @return {Object}
 */
function getExpectedDoorSymbols(dungeonNumber, characterCount) {
  const regularDoorCount = bosses[dungeonNumber].doorCount
  const challengeDoorCount = 2 * characterCount

  return flow(
    sumSymbolCounts,
    mapValues(v => v / (regularDoorCount + challengeDoorCount))
  )([
    mapValues(v => v * regularDoorCount)(E_SYMBOLS_ON_REGULAR_DOOR),
    mapValues(v => v * challengeDoorCount)(E_SYMBOLS_ON_CHALLENGE_DOOR)
  ])
}

/**
 * Returns the average number of symbols the players will see over the course
 * of the dungeon.
 * @param  {number} dungeonNumber  1...5
 * @param  {number} characterCount 2...5
 * @return {Object}
 */
function getExpectedTotalSymbols(dungeonNumber, characterCount) {
  const boss = bosses[dungeonNumber]
  const doorCount = boss.doorCount + 2 * characterCount

  return sumSymbolCounts([
    mapValues(v => v * doorCount)(getExpectedDoorSymbols(dungeonNumber, characterCount)),
    textToSymbolCount(boss.symbols)
  ])
}

module.exports = {
  getExpectedTotalSymbols,
  getExpectedDoorSymbols
}
