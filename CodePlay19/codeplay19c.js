/**
 * Code-play 19: Callbacks
   Experimenting with callbacks
   In the TERMINAL window, use the following to execute the script:  node codeplay19c.js 
  */

const fs = require("fs");
let file;
function printFile (err, data) { console.log(data.toString()); }
fs.readFile("data.txt", printFile);
