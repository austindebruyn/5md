const assert = require('assert')
const cards = require('./cards')

class Deck {
  constructor(name) {
    this.name = name
    this.cards = []
  }

  add(count, card) {
    this.cards.push.apply(this.cards, new Array(count).fill(card))
    return this
  }
}

const DECKS = {}

DECKS.blue = new Deck('blue')
  .add(9, cards.r)
  .add(7, cards.a)
  .add(6, cards.j)
  .add(5, cards.h)
  .add(3, cards.s)
  .add(2, cards.rr)
  .add(3, cards.mb)
  .add(4, cards.fb)
  .add(1, cards.c)

DECKS.red = new Deck('red')
  .add(5, cards.s)
  .add(7, cards.h)
  .add(6, cards.j)
  .add(5, cards.a)
  .add(3, cards.r)
  .add(2, cards.e)
  .add(2, cards.sa)
  .add(2, cards.sh)
  .add(2, cards.sr)
  .add(2, cards.sj)
  .add(2, cards.ss)
  .add(2, cards.ml)

DECKS.green = new Deck('green')
  .add(9, 'a')
  .add(7, 'j')
  .add(4, 'r')
  .add(4, 's')
  .add(3, 'h')
  .add(2, 'aa')
  .add(1, 'sn')
  .add(2, 'hrb')
  .add(8, 'wc')

DECKS.yellow = new Deck('yellow')
  .add(9, 'h')
  .add(8, 'r')
  .add(6, 's')
  .add(6, 'a')
  .add(2, 'hh')
  .add(3, 'j')
  .add(2, 'ds')
  .add(1, 'hhg')
  .add(1, 'heal')
  .add(1, 'hp')
  .add(1, 'sm')

DECKS.purple = new Deck('purple')
  .add(7, 'j')
  .add(7, 's')
  .add(6, 'r')
  .add(5, 'h')
  .add(3, 'a')
  .add(3, 'jj')
  .add(3, 'bs')
  .add(3, 'sp')
  .add(1, 'd')
  .add(2, 'st')

Object.values(DECKS).forEach(deck => assert.equal(40, deck.cards.length))

Object.assign(module.exports, DECKS)
