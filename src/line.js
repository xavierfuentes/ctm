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
    let lineScore = 0
    this.frames // gets all the frames
      .forEach((frame, index, allFrames) => {
        let currFrameScore = this.getFrameScore(frame, allFrames[index + 1])

        lineScore += currFrameScore
      })

    return lineScore
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
   * @param  {Array}     frame       Array of strings representing the number of pins for each throw
   * @return {Integer}               Frame score
   */
  getFrameScore(frame = [0,0], nextFrame = [0,0]) {
    return frame
      .reduce((prev, curr) => {
        if (curr === 'X') return 10 + Number(nextFrame[0]) + Number(nextFrame[1])
        if (curr === '/') return 10 + Number(nextFrame[0])

        return Number(prev) + Number(curr)
      }, 0)
  }
}

module.exports = Line
