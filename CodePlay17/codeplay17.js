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

// Immutability
const hello = "hello";
const five = 5;
const vegetables = ["Carrot", "Potato", "Pumpkin", "Broccoli"];
const city = {name: "Antwerp", country: "Belgium"};

Object.freeze(vegetables);
Object.freeze(city);

vegetables[0] = "Cauliflower";
city.name = "Brussels";
console.log(vegetables);
console.log(city);


function arrayAdd(collection, index, newItems) {
    const newCollection = collection.slice();
    if (Array.isArray(newItems)) {
        newCollection.splice(index, 0, ...newItems);
    } else {
        newCollection.splice(index, 0, newItems);
    }
    return newCollection;
}

// Recursive functions
function recursiveSubtractor(initialNum) {
//    if (initialNum === 0) { console.log("Reached 0"); return; }
    if (initialNum <= 0) { console.log("Reached 0 or under"); return; }
    else {
        console.log(`Currently at ${ initialNum }`);
        recursiveSubtractor(initialNum - 1);
    }
}
recursiveSubtractor(5);
recursiveSubtractor(-5);
//recursiveSubtractor(20000);


function factorial(initialNum) {
    if (initialNum === 0) { console.log("Reached 0"); return 1; }
    else {console.log(`Multiplying ${initialNum} by ${initialNum - 1}`); return initialNum * factorial(initialNum - 1); }
}
console.log(factorial(10));
