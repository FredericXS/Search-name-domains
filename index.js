const axios = require('axios');
const prompt = require('prompt-sync')();
const color = require('colors');
const extensions = require('./extensions.json');

/* Verify all domains of a name,
like test.com, test.net, test.org, etc. */

function searchDomains(name) {
  console.log('Searching domains...'.blue);
  extensions.forEach(extension => {
    extension = extension.toLowerCase();
    axios.get(`https://${name}.${extension}`)
      .then(() => {
          console.log(`https://${name}.${extension} is on!`.green);
          // print domains that are on.
      })
      .catch(() => { /* console.log(`https://${name}.${extension} is off!`.red) */ });
      // print domains that are off.
  });
}

const name = prompt('Enter a name to search: ');
searchDomains(name);