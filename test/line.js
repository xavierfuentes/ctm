const BowlingLine = require('../src/line')
const expect = require('chai').expect

describe('Ten Pin Bowling Score Calculator', () => {
  let line

  it('handles all zeros', () => {
    line = new BowlingLine('00|00|00|00|00|00|00|00|00|00||')
    expect(line.getScore()).to.equal(0)
  })

  it('handles all ones', () => {
    line = new BowlingLine('11|11|11|11|11|11|11|11|11|11||')
    expect(line.getScore()).to.equal(20)
  })

  it('handles one spare', () => {
    line = new BowlingLine('1/|11|11|11|11|11|11|11|11|11||')
    expect(line.getScore()).to.equal(29)
  })

  it('handles one strike', () => {
    line = new BowlingLine('X|11|11|11|11|11|11|11|11|11||')
    expect(line.getScore()).to.equal(30)
  })

  it('handles all spares + 1 bonus ball', () => {
    line = new BowlingLine('5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5')
    expect(line.getScore()).to.equal(150)
  })

  it('handles all strikes + 2 bonus balls', () => {
    line = new BowlingLine('X|X|X|X|X|X|X|X|X|X||50')
    expect(line.getScore()).to.equal(280)
  })

  it('handles a perfect game', () => {
    line = new BowlingLine('X|X|X|X|X|X|X|X|X|X||XX')
    expect(line.getScore()).to.equal(300)
  })

  it('handles a random example', () => {
    line = new BowlingLine('X|7/|9-|X|-8|8/|-6|X|X|X||81')
    expect(line.getScore()).to.equal(167)
  })
})
