const BowlingLine = require('../src/line')
const expect = require('chai').expect

/**
* Potential tests:
* - a line with all zeros
* - a line with all ones
* - a line with one spare
* - a line with one strike
* - a line with all spares (1 bonus)
* - a line with all strikes (2 bonus)
*/
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

  it('handles all strikes + 2 bonus balls ', () => {
    line = new BowlingLine('X|X|X|X|X|X|X|X|X|X||50')
    expect(line.getScore()).to.equal(280)
  })
})
