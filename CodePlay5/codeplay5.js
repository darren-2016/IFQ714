/* Code-play 5: JavaScript Object Notation (JSON)
   Experimenting with JavaScript Object Notation (JSON).
   In the TERMINAL window, use the following to execute the script:  node codeplay5.js 
  */

// JSON Formats and Objects
let incomingData = '{"brand":"Mazda","model":"MX-5","year":1989}';

let car2 = JSON.parse(incomingData);

console.log(car2.brand);
console.log(car2.model);
console.log(car2.year);

let outgoingData = JSON.stringify(car2);

console.log(outgoingData);

//console.log(car2.toString());

// Arrays
let listOfNumbers = [1, 2, 3, 4, 5];
console.log(listOfNumbers);

let listOfValues = [1, "one", true];
console.log(listOfValues);
console.log(listOfValues[1]);

listOfNumbers[2] = 6;
console.log(listOfNumbers[2]);

let multiArray = [[1,2],[3,4],[5,6]];
console.log(multiArray);
console.log(multiArray[0][0]);
console.log(multiArray[0]);