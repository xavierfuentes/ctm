const readline = require('readline');
const BowlingLine = require('./src/line');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('How was the bowling game? ', (answer) => {
  const line = new BowlingLine(answer);
  console.log('nice! Your final score is: ', line.getScore());
  rl.close();
});
