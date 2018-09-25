const animation = require('ascii-animation');
const fs = require('fs');

const mixtape = [...Array(9).keys()].map((i) => 
  fs.readFileSync(__dirname + `/frames/${i}.txt`, 'utf8'),
)

animation.animate(
  mixtape.concat(mixtape.slice().reverse()),
  () => true,
).bold().colorize();
