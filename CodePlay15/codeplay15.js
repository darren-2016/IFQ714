/**
 * Code-play 15: Working with Arrays
   Experimenting with arrays
   In the TERMINAL window, use the following to execute the script:  node codeplay15.js 
  */


   /***************************
    * Array Methods           *
    ***************************/

   // sort, by default, converts the array contnetns into strings and then sorts them. So, the output shows 
   // the numbers, not in numeric order but alphabetic order.
   let numbers = [200, 50, 1, 9001];
   numbers.sort();
   console.log(numbers);

   // Add a function as an argument -the comparison function works by taking two of the elements as arguments, 
   // then working out which comes before the other by the return value. A negative value means the first 
   // value comes first, positive means second value comes first. So subtracting second value from first is 
   // all that's required to sort numbers.
   numbers.sort(function (a, b) {return a - b});
   console.log(numbers);

   // 
   let animals = [{name: "Platypus", group: "mammal"}, {name: "Goanna", group: "reptile"}];
   //animals.sort(function (a, b) { return a - b });
   animals.sort(function (a, b) { return a.name.localeCompare(b.name) });
   console.log(animals);

// To add a new animal to the previous array, use push()
    console.log(animals.push({name: "Wobbegong", group: "fish"}));
    console.log(animals);

// To remove an element from the array, use pop()
    let extraAnimal = animals.pop();
    console.log(extraAnimal);
    console.log(animals.length);

// Example of use of shift, unshift
let queue = [];
queue.push(1, 2, 3, 4);
while(queue.length > 0) {
    let element = queue.shift();
    console.log(`${element} is next in line`);

}

// Add an item in the middle of the array, using splice()
console.log(animals);
animals.splice(1, 0, extraAnimal);
console.log(animals);

// Remove everything except the goanna from the array
extraAnimal = animals.splice(1,2);
console.log(animals);
console.log(extraAnimal);


// Get a subset of the array without altering it
console.log(numbers);
console.log(numbers.slice(1,2));
console.log(numbers);


/*****************************************
 * Array methods across all elements     *
 *****************************************/

// forEach method
let wonders = ["Great Pyramid", "Hanging Gardens", "Statue of Zeus", "Temple of Artemis", "Tomb of Mausolus", "Colossus", "Pharos"];
wonders.forEach(function(element, index) {console.log(`Element at ${index} is ${element}`); });

// Modifying the array
wonders.forEach(function(element, index) { wonders[index] = element.toUpperCase() });
console.log(wonders);

// Using map() to change an array but not modify the original
let lowerWonders = wonders.map(function(element) { return element.toLowerCase() });
console.log(lowerWonders);
console.log(wonders);

// filter() - for finding elements in an array that meet certain conditions
console.log(numbers.filter(function(element) { return element < 100 }));

// find() and findIndex() functions
console.log(numbers.find(function(element) { return element < 100 }));
console.log(numbers.findIndex(function(element) { return element < 100 }));

// some() and every() methods
console.log(numbers);
console.log(numbers.some(function(element) { return element < 100 }));
console.log(numbers.every(function(element) { return element < 100 }));

/*****************************************
 * Array references and copying          *
 *****************************************/

let a = 10; let b = a;
b += 10;
console.log(`a = ${a}`);
console.log(`b = ${b}`);

let c = [1, 2, 3]; let d = c;
d[2] = 4;
console.log(`c = ${c}`);
console.log(`d = ${d}`);

const e = [4, 5, 6];
e[2] = 7;
console.log(`e = ${e}`);
//e = [7, 8, 9];

let f = [7, 8, 9];
let g = f.slice();
g[2] = 10;
console.log(`f = ${f}`);
console.log(`g = ${g}`);

// slice() performs 'shallow' copies on arrays, so doesn't copy the contents of the multi-dimensiopn array, just the references
let multiA = [[1,1],[2,2]];
let multiB = multiA.slice();
multiB[0][0] = 6;
console.log(`multiA = ${multiA}`);
console.log(`multiB = ${multiB}`);

// Using JSON.parse() and JSON.stringify() to perform effectively a 'deep' copy 
let car1 = {brand: "Ferrai", model: "F40", year: 1987};
let car2 = JSON.parse(JSON.stringify(car1));
car2.model = "F50";
car2.year = 1995;
console.log(car1);
console.log(car2);
