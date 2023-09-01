const fs = require('fs');
let firstLine = "The quick brown fox...";
let secondLine = "\n...jumps over the lazy dog.";
fs.appendFileSync("jump.txt", firstLine);
fs.appendFile("jump.txt", secondLine, function (error) { if (error) { console.log(error.message); }});
