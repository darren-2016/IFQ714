const fs = require('fs');

const contents = "The ocean (also the sea or the world ocean) is the body of salt water that covers approximately 70.8% of the surface of Earth and contains 97% of Earth's water.";

fs.writeFileSync("ocean.txt", contents);

fs.writeFile("ocean2.txt", contents, function (error) { if (error) { console.log(error.message); }});

let stream = fs.createWriteStream("ocean3.txt");
stream.write(contents);
stream.end("\nEnd of file");
