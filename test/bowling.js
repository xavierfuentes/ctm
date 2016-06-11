const BowlingLine = require('../src/line');
const expect = require('chai').expect;

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
  it('handles all zeros', () => {
    const line = new BowlingLine('00|00|00|00|00|00|00|00|00|00||');
    expect(line.getScore()).to.equal(0);
  });
});
