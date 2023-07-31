/* Code-play 7: Basic conditionals
   Experimenting with Basic conditionals
   In the TERMINAL window, use the following to execute the script:  node codeplay7.js 
  */

let yes = true;
let no = false;
if (yes && no) {
    console.log("Both values are true");
}
if (yes || no) {
    console.log("One value is true");
}


let number1 = 10;
let number2 = 20;
if (number1 < number2) {
    console.log("Number 1 is smaller than Number 2");
}
if (number1 > number2) {
    console.log("Number 1 is larger than Nuber 2");
}


if (number1 < number2) {
    console.log("Number 1 is smaller than Number 2");
} else {
    console.log("Number 1 is larger thn or equal to Number 2");
}


if (yes && no) {
    console.log("Both values are true");
} else if (yes || no) {
    console.log("One value is true");
}


let special = false;
console.log("Performing a normal operation.");
if (special) {
    console.log("Performing a special operation.");
}
console.log("Program has ended.");


let firstValue = true;
let newVariable;
newVariable = firstValue ? "first" : "second";
console.log(newVariable);


if (firstValue) {
    newVariable = "first";
} else {
    newVariable = "second";
}
console.log(newVariable);


