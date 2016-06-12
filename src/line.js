class Line {
  constructor(lineString = '00|00|00|00|00|00|00|00|00|00||') {
    this.lineString = lineString
  }

  /**
   * Calculates the scoring for a single frame
   * @param  {Array}     frame   Array of strings representing the number of pins for each throw
   * @return {Integer}           Frame score
   */
  getFrameScore(frame) {
    return frame.split('') // split throws (turns 2 characters into an array)
    .reduce((prev, curr) => {
      // turns each character into a number and sums them
      return Number(prev) + Number(curr)
    }, 0) // intial score of 0
  }

  /**
   * Calculates the scoring for an entire line
   * @return {Integer}   Line score
   */
  getScore() {
    return this.lineString
      .split('|') // split frames
      .map(this.getFrameScore) // gets frame scoring
      .reduce((prev, curr) => prev + curr) // sums all frames
  }
}

module.exports = Line
