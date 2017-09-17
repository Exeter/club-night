const readline = require('readline');
const fs = require('fs');
const colors = require('colors');
const opts = {
  input: process.stdin,
  output: process.stdout,
  prompt: 'Exeter Email > '.magenta.bold,
};
const fname = (process.argv.length > 2) ? process.argv[2] : 'ecc-list.txt';

let rl = readline.createInterface(opts);
let motd = [];
motd.push('###########################################');
motd.push('#                                         #');
motd.push('#  Welcome to Exeter Computing Club 2017  #');
motd.push('#          Check out our GitHub:          #');
motd.push('#       https://github.com/exeter         #');
motd.push('#                                         #');
motd.push('###########################################');
motd.push('');

console.log(motd.join('\n').white.bold);
rl.prompt();

rl.on('line', (input) => {
  let eml = input.trim().toLowerCase();
  if (eml.indexOf('@') == -1) eml += '@exeter.edu';
  fs.appendFileSync(fname, eml+'\n');
  console.log('Thanks! We\'ll send you an email announcing our first meeting.');
  rl.prompt();
});
rl.on('close', function () {
  console.log('Bye!');
});
rl.on('SIGINT', function () {
  rl.clearLine();
  rl.prompt();
});
