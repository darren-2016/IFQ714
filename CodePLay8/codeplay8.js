/* Code-play 8: More on conditionals
   Experimenting with more conditionals
   In the TERMINAL window, use the following to execute the script:  node codeplay7.js 
  */

let aString = "Hello world!";
if (aString) {
    console.log("aString exists");
}


//if (!notAString) {
//    console.log("notAString does not exist");
//}


if (typeof notAString === "undefined") {
    console.log("notAString does not exist");
}


let number1 = 30;
let number2 = 20;
let number3 = 10;
if (number1 > number2 && number1 > number3) {
    console.log("Number 1 is greater than number 2 and number 3");
}


if (number1 > number2) {
    if (number1 > number3) {
        console.log("Number 1 is greater than number 2 and number 3");
    } else {
        console.log("Number 1 is greater than number 2 but not greater than number 3");
    }
}


let coin1 = "heads";
let coin2 = "heads";
let coin3 = "heads";
if (coin1 === "heads" && coin2 === "heads" && coin3 == "heads") {
    console.log("Well done, you got three heads");
}


let coin4 = "heads";
let coin5 ="tails";
let coin6 = "tails";
if (coin4 === "heads" || coin5 === "heads" && coin6 === "heads") {
    console.log("Coin 4 is heads, or coin 5 and coin 6 are heads");
}
if ((coin4 === "heads" || coin5 === "heads") && coin6 === "heads") {
    console.log("Coin 4 or coin 5 are heads, and coin 6 is heads");
}


let unknownType = "five";
if (!Number.isNaN(unknownType)) {
    console.log("The value is a number");
} else {
    console.log("The value is not a numnber");
}


let flightStatus = "boarding";
switch(flightStatus) {
    case "scheduled":
        console.log("Flight is on time");
        break;
    case "boarding":
        console.log("Flight is boarding");
        break;
    case "departed":
        console.log("Flight has departed");
        break;
    default:
        console.log("Flight status unknown");
        break;
}




