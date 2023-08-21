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
