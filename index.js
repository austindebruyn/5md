require('colors')
const inquirer = require('inquirer')
const bosses = require('./lib/bosses')
const expectedDoorSymbols = require('./print/expectedDoorSymbols')
const expectedTotalSymbols = require('./print/expectedTotalSymbols')
const {
  getExpectedTotalSymbols,
  getExpectedDoorSymbols
} = require('./lib/e')

const DUNGEON_QUERY = {
  type: 'list',
  name: 'dungeonNumber',
  message: 'Which dungeon are you entering?',
  choices: [1, 2, 3, 4, 5].map(function (v) {
    return { value: v, name: `Dungeon #${v} - ${bosses[v].name}` }
  })
}

const CHARACTER_COUNT_QUERY = {
  type: 'list',
  name: 'characterCount',
  message: 'How many people are playing?',
  choices: [1, 2, 3, 4, 5].map(v => { return { value: v, name: v }})
}

inquirer.prompt([DUNGEON_QUERY, CHARACTER_COUNT_QUERY])
  .then(function ({ dungeonNumber, characterCount }) {
    console.log(`${'Fighting...... '.yellow}${bosses[dungeonNumber].name.red}`)
    console.log('')

    // Each door you flip over has a ...
    const eSymbols = getExpectedDoorSymbols(dungeonNumber, characterCount)
    const g = 'ASHRJ'.split('').map(l => [l, eSymbols[l]]).sort(a => a[1])
    console.log(expectedDoorSymbols(g))

    // In total, you can expect to see about ...
    const eTotal = getExpectedTotalSymbols(dungeonNumber, characterCount)
    const h = 'ASHRJ'.split('').map(l => [l, eTotal[l]]).sort(a => a[1])
    console.log(expectedTotalSymbols(h))
  })
  .catch(function (e) {
    console.log(e)
  })
