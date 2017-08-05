class Door {
}

class EventDoor extends Door {
  constructor(name, text) {
    super()
    this.doorType = 'event'
    this.name = name
    this.text = text
  }
}

class EnemyDoor extends Door {
  constructor(type, symbols, name) {
    super()
    this.doorType = 'enemy'
    this.type = type
    this.symbols = symbols
    this.name = name
  }
}

Door.Types = { MONSTER: 1, PERSON: 2, OBSTACLE: 3, MINIBOSS: 9999 }

class DoorCollection {
  constructor() {
    this.doors = []
  }

  all() {
    return this.doors
  }

  add(...args) {
    this.doors.push(new (args.length === 3 ? EnemyDoor : EventDoor)(...args))
    return this
  }
}

const doors = new DoorCollection()
  .add(Door.Types.OBSTACLE, 'RRR', 'Living Vines')
  .add(Door.Types.OBSTACLE, 'RRH', 'Wall of Spikes')
  .add(Door.Types.OBSTACLE, 'RAA', 'The Carpal Tunnel')
  .add(Door.Types.OBSTACLE, 'SRR', 'Collapsed Ceiling')
  .add(Door.Types.OBSTACLE, 'SHH', 'A "Shortcut"')
  .add(Door.Types.OBSTACLE, 'SJA', 'A Very Long Loading Screen')
  .add(Door.Types.OBSTACLE, 'JHH', 'A Definitely Not Booby-Trapped Chest')
  .add(Door.Types.OBSTACLE, 'SRJ', 'A Literal Strawman')
  .add(Door.Types.OBSTACLE, 'SJH', 'A Chair That Is Very Uncomfortable')
  .add(Door.Types.OBSTACLE, 'JJJ', 'A Ludicrously Tall Wall of Ice')
  .add(Door.Types.OBSTACLE, 'JJA', 'A Surprise Dodgeball Tournament')
  .add(Door.Types.OBSTACLE, 'JJH', 'Quicksand')
  .add(Door.Types.OBSTACLE,  'RJ', 'Just a Bunch of Stairs')
  .add(Door.Types.OBSTACLE,  'JJ', 'Bottomless Pit')
  .add(Door.Types.OBSTACLE,  'RR', 'Invisible Wall')
  .add(Door.Types.MONSTER,  'SSS', 'Lots and Lots of Zombies')
  .add(Door.Types.MONSTER,  'SAA', 'Shark With Legs!!')
  .add(Door.Types.MONSTER,  'HHH', 'A Cactus That Wants a Hug')
  .add(Door.Types.MONSTER,  'HRH', 'Eeeewwwwwww...')
  .add(Door.Types.MONSTER,  'JAA', 'Sir Fuzzylumps')
  .add(Door.Types.MONSTER,  'RJH', 'The Duck of Canterbury')
  .add(Door.Types.MONSTER,   'SS', 'A Timber-Wolf')
  .add(Door.Types.MONSTER,   'SJ', 'Gorblin')
  .add(Door.Types.MONSTER,   'JA', 'Adorable Slime')
  .add(Door.Types.MONSTER,   'RH', 'A Straight-Up Ghost')
  .add(Door.Types.MONSTER,   'JH', 'A Rosetta Stone Golem')
  .add(Door.Types.MONSTER,   'SA', 'Uugghh...Boots')
  .add(Door.Types.PERSON,   'SSH', 'Barber-Arian')
  .add(Door.Types.PERSON,   'SRS', 'Massive Pauldrons')
  .add(Door.Types.PERSON,   'SSA', 'A "Ghost"')
  .add(Door.Types.PERSON,   'SHA', 'A Gaggle of Screaming Children')
  .add(Door.Types.PERSON,   'SRH', '7 Unhelpful Dwarfs')
  .add(Door.Types.PERSON,   'RJA', 'Steve')
  .add(Door.Types.PERSON,   'RJJ', 'Exactly 26 Ninjas')
  .add(Door.Types.PERSON,   'RRJ', 'An Overpriced Merchant')
  .add(Door.Types.PERSON,   'HAH', 'Squire Nedward')
  .add(Door.Types.PERSON,   'AHA', 'Two Guys, One Bow')
  .add(Door.Types.PERSON,   'JHA', 'Grozznak the Tall')
  .add(Door.Types.PERSON,    'HA', 'A Warrior Princess')
  .add(Door.Types.PERSON,    'RA', 'An Arm Dealer')

const challenges = new DoorCollection()
  .add(Door.Types.MINIBOSS, 'AAAHHH', 'Giant Enemy Crab')
  .add(Door.Types.MINIBOSS, 'HASHAS', 'A Miniature T-Rex')
  .add(Door.Types.MINIBOSS, 'JJJSSS', 'The Rat King')
  .add(Door.Types.MINIBOSS, 'RRJRRJ', 'A Wizard of Ill Repute')
  .add(Door.Types.MINIBOSS,  'HASRJ', 'The Collector')
  .add('Ambush', 'Flip over the next 2 Dungeon Cards. You must defeat both before moving on.')
  .add('A Boo-Boo', 'All Players: Discard a Card')
  .add('Confusion', 'All Players: Pass your hand to another player')
  .add('Trap Door', 'All Players: Discard 3 Cards')
  .add('Sudden Illness', 'All Players: Discard your hand')

module.exports = {
  challenges,
  doors,
  Types: Door.Types
}
