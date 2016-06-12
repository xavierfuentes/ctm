class Line {
  constructor(lineString = '00|00|00|00|00|00|00|00|00|00||') {
    this.lineString = lineString
    this.frames = this.getFrames(lineString)
    this.bonusFrames = this.getBonusFrames(lineString)
  }

  /**
   * Calculates the scoring for an entire line
   * @return {Integer}   Line score
   */
  getScore() {
    let lineScore = 0

    this.frames.forEach((frame, index, allFrames) => {
      const isLast = index === allFrames.length - 1
      let nextFrame = allFrames[index + 1] || this.bonusFrames
      let futureFrame = allFrames[index + 2] || this.bonusFrames

      lineScore += frame
        .reduce((prev, curr) => {
          // three strikes in a row
          if (curr === 'X' && nextFrame[0] === 'X' && futureFrame[0] === 'X') return 30
          // two strikes in a row
          if (curr === 'X' && nextFrame[0] === 'X') return 20 + Number(futureFrame[0])
          // one strike
          if (curr === 'X') return 10 + Number(nextFrame[0]) + Number(nextFrame[1])
          // one spare
          if (curr === '/') return 10 + Number(nextFrame[0])

          return Number(prev) + Number(curr)
        }, 0)
    })

    return lineScore
  }

  /**
   * Gets the normal (not bonus) frames from a string
   * @param  {String}   lineString   Definition of the game
   * @return {Array}                 Frames that compose the normal (not bonus) rolls
   */
  getFrames(lineString) {
    const frames = lineString.split('||')[0].split('|') // split normal frames from the bonus ones

    // 10 is for the 2 bonus rounds
    if (frames.length > 10) throw Error('The max number of frames is 10')

    // split throws (turns 2 characters into an array)
    return frames.map((frame) => frame.split(''))
  }

  /**
   * Gets the bonus frames from a string
   * @param  {String}   lineString   Definition of the game
   * @return {Array}                 Frames that compose the bonus rolls
   */
  getBonusFrames(lineString) {
    return lineString.split('||')[1].split('')
  }
}

module.exports = Line
