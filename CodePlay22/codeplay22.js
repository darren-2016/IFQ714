// Synchronous file reading
const fs = require('fs');
let text = fs.readFileSync("DataFiles/datafile.txt", "utf8");
console.log(text);

let text2 = fs.readFileSync("DataFiles/datafile.txt");
console.log(text2);

// Asynchronous file reading
fs.readFile("DataFiles/datafile.txt", "utf8", function (error, text) {
    if (error) { console.log(error.message); }
    else { console.log(text); }
});

// Stream file reading
let stream = fs.createReadStream("DataFiles/datafile.txt", "utf8");

stream.on("readable", function() {
    let chunk = stream.read(100);
    console.log(`Current chunk: ${chunk}`);
});
stream.on("end", function() { stream.close(); });
stream.on("error", function(error) { console.log(error.message); stream.close(); });

// Stream file reading (flowing mode)
let stream2 = fs.createReadStream("DataFiles/datafile.txt", "utf8");

stream2.on("data", function(chunk) {
    console.log(`Current chunk: ${chunk}`);
});
stream2.on("end", function() { stream2.close(); });
stream2.on("error", function(error) { console.log(error.message); stream2.close(); });