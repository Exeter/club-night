const fs = require('fs');
const colors = require('colors');
const fname = (process.argv.length > 2) ? process.argv[2] : 'ecc-list.txt';

try {
  data = fs.readFileSync(fname, 'utf-8');
  let dlist = data.trimRight().split('\n');
  for (let i = 0; i < dlist.length; i++) {
    if (!dlist[i].trim().match(/^([a-z0-9]+)@exeter.edu$/i)) {
      console.log(
        ((i+1) + ': ').red.bold
        + dlist[i].trim()
      );
    }
  }
} catch(e) {
  console.error(e.stack);
}
