class Line {
  constructor(lineString = '00|00|00|00|00|00|00|00|00|00||') {
    this.lineString = lineString
    this.frames = this.getFrames(lineString)
  }

  /**
   * Calculates the scoring for an entire line
   * @return {Integer}   Line score
   */
  getScore() {
    return this.frames // gets all the frames
      .map(this.getFrameScore) // gets frame scoring
      .reduce((prev, curr) => prev + curr) // sums all frames
  }

  /**
   * Gets the normal (not bonus) frames from a string
   * @return {Array}   Frames that form the bowling line
   */
  getFrames(lineString) {
    const frames = lineString.split('||')[0].split('|') // split normal frames from the bonus ones

    // 10 is for the 2 bonus rounds
    if (frames.length > 10) throw Error('The max number of frames is 10')

    // split throws (turns 2 characters into an array)
    return frames.map((frame) => frame.split(''))
  }

  /**
   * Calculates the scoring for a single frame
   * @param  {Array}     frame   Array of strings representing the number of pins for each throw
   * @return {Integer}           Frame score
   */
  getFrameScore(frame) {
    return frame
      .reduce((prev, curr) => {
        // turns each character into a number and sums them
        return Number(prev) + Number(curr)
      }, 0) // intial score of 0
  }
}

module.exports = Line
