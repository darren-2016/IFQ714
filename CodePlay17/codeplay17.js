/**
 * Code-play 17: Functional programming techniques
   Experimenting with functional programming techniques
   In the TERMINAL window, use the following to execute the script:  node codeplay17.js 
  */

// functional programming
const addOne = function (element) {
    return element + 1;
}
const numbers = [1, 2, 3, 4];
const newNumbers = numbers.map(addOne);
console.log(newNumbers);

// pure functions
function multiplyByFive(initialNum) {
    return initialNum * 5;
}

// not a pure function
function multiplyByRandom(initialNum) {
    return initialNum * Math.random();
}

// also not pure
const multipliers = [5, 10, 15, 20];
function multiplyByArray(initialNum) {
    return multipliers.amp(function(element) { return initialNum * element; } );
}

// this is pure
function multiplyByRandom(initialNum, random) { // Pass the random number as an argument
    return initialNum * random;
}

// and this is pure
function multiplyByArray(initialNum, multipliers) { //Pass the multipliers as an argument
    return multipliers.map(function(element) { return initialNum * element; } );
}


// this is not pure
let vehicleSpeeds = [100, 200, 300];
function increaseVehicleSpeeds(multiplier) {
    vehicleSpeeds.forEach(function (element, index) { vehcileSpeeds[index] = element * multiplier; });
}

// this is pure
function increaseVehicleSpeeds(speeds, multiplier) {
    return speeds.map(function (element) { return element * multiplier; });
}

// not pure
function printGreeting(greeting) {
    console.log(greeting);
}

