class BossList {
  constructor() {
    this.bosses = []
  }

  add(...args) {
    const boss = new Boss(...args)
    this.bosses.push(boss)
    this[boss.number] = boss
    return this
  }

  get first() { return this.bosses[0] }
  get second() { return this.bosses[1] }
  get third() { return this.bosses[2] }
  get fourth() { return this.bosses[3] }
  get fifth() { return this.bosses[4] }
}

class Boss {
  constructor(number, doorCount, symbols, name) {
    this.number = number
    this.doorCount = doorCount
    this.symbols = symbols
    this.name = name
  }
}

const bosses = new BossList()
  .add(1, 20, 'SSAAJJJ', 'Baby Barbarian')
  .add(2, 25, 'RRRRRRRHHH', 'The Grime Reaper')
  .add(3, 30, 'HHHSSSSJJJ', 'Zola tha Gorgon')
  .add(4, 35, 'HSJJJJAAAAA', 'A Freakin\' Dragon!!!')
  .add(5, 40, 'SSSAAAHHHRRR', 'The Dungeon Master')

module.exports = bosses
