class Playset {
  constructor() {
    this.cards = []
  }

  add(key, name) {
    this.cards.push(new Card(...arguments))
    return this
  }

  collection() {
    return this.cards.reduce(function (a, c) {
      if (a[c.key]) throw new Error(`duplicate card key ${c.key}`)
      a[c.key] = c
      a[c.name] = c
      return a
    }, {})
  }
}
class Card {
  constructor(key, name) {
    this.key = key
    this.name = name
  }
}

const playset = new Playset()

playset.add('s', 'sword')
  .add('h', 'shield')
  .add('a', 'arrow')
  .add('r', 'scroll')
  .add('j', 'jump')
  .add('sh', 'sword+shield')
  .add('sj', 'sword+jump')
  .add('sa', 'sword+arrow')
  .add('sr', 'sword+scroll')
  .add('ss', 'sword x2')
  .add('hh', 'shield x2')
  .add('aa', 'arrow x2')
  .add('rr', 'scroll x2')
  .add('jj', 'jump x2')
  .add('fb', 'fireball')
  .add('sn', 'snipe')
  .add('sm', 'smite')
  .add('bs', 'backstab')
  .add('sp', 'sprint')
  .add('hrb', 'healing herbs')
  .add('c', 'cancel')
  .add('e', 'enrage')
  .add('ml', 'mightly leap')
  .add('mb', 'magic bomb')
  .add('wc', 'wild card')
  .add('ds', 'divine shield')
  .add('hhg', 'holy hand grenade')
  .add('heal', 'heal')
  .add('hp', 'health potion')
  .add('d', 'donation')
  .add('st', 'steal')

module.exports = playset.collection()
