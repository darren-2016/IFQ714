/* Code-play 4: Objects
   Experimenting with JavaScript Objects.
   In the TERMINAL window, use the following to execute the script:  node codeplay4.js 
  */


// Properties and methods
let numberVar = 1.337;
let stringVar = "computers are cool";

console.log(numberVar.toString());
console.log(numberVar.toFixed(2));
console.log(stringVar.length);
console.log(stringVar.slice(0,9));
console.log(stringVar.replace("cool", "uncool"));


// Objects
let car1 = {
    brand: "Ferrari",
    model: "F50",
    year: 1995
}

console.log(car1.brand);
console.log(car1.model);
console.log(car1.year);

car1.brand = "Pagani"; car1.model = "Zonda"; car1.year = 1999;
console.log(car1);

