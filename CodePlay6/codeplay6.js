/* Code-play 6: Functions
   Experimenting with Functions.
   In the TERMINAL window, use the following to execute the script:  node codeplay5.js 
  */

// Using inbuilt functions
console.log(Number.parseInt("5"));
console.log(Number.parseInt("five"));

// Function arguments
console.log("hello", "world");
console.log(Number.parseInt("5", "4"));
console.log(Math.max());

// Creating functions

// function as a variable
let greeting1 = function () {
    console.log("Hello world!");
}

// function as a declaration
function greeting2() {
    console.log("Hello world!");
}

greeting1();

greeting2();

let greeting3 = function (text) {
    console.log(text);
}

// function as a declaration
function greeting4(text) {
    console.log(text);
}

greeting3("Salutations, Earth!");

greeting4("Salutations, Earth!");

let greeting5 = function (text) {
    console.log(text);
    return text.length;
}

// function as a declaration
function greeting6(text) {
    console.log(text);
    return text.length;
}

console.log(greeting5("Salutations, Earth!"));

console.log(greeting6("Salutations, Earth!"));

// Calling function greeting6() without an argument
//greeting6();

let greeting7 = function (text = "Nothing specified!") {
    console.log(text);
    return text.length;
}

// function as a declaration
function greeting8(text = "Nothing specified!") {
    console.log(text);
    return text.length;
}

console.log(greeting7());

console.log(greeting8());

// Function scope
function addFive (initialNum) {
    let five = 5;
    return initialNum + five;
}

// Trying to use five outside of scope
//console.log(five);

let six = 6;
function addSix (initialNum) {
    return initialNum + six;
}

console.log(addSix(4));

let five = "five";
six = "six";
console.log(addFive(10));
console.log(addSix(10));

const anotherSix = 6;

function addManyOnes (initialNum, numOfOnes) {
    let counter = 0;
    let newNum = initialNum;
    while (counter < numOfOnes) {
        let one = 1;
        newNum = newNum + one;
        counter = counter + 1;
    }
    return newNum;
}

console.log(addManyOnes(10, 5));

function addTwoTwos (initialNum) {
    let counter = 0;
    let newNum = initialNum;
    while (counter < two) {
        let two = 2;
        newNum = newNum + two;
        counter = counter + 1;
    }
    return newNum;
}

// if addTwoTwos() is called, will error due to scope of two variable
//console.log(addTwoTwos(2));

function addSingleThree(initialNum) {
    let three = 3;
    return initialNum + three;
}
function addTwoThrees(initialNum) {
    let three = 3;
    return initialNum + three + three;
}

console.log(addSingleThree(1));

console.log(addTwoThrees(1));

let eight = "eight";
function addEight(initialNum) {
    let eight = 8;
    return initialNum + 8;
}
console.log(eight);

// Constructors
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let car3 = new Car("Bugatti", "Veyron", 2005);
console.log(car3);

let emptyCar = new Car();
console.log(emptyCar.brand);
console.log(emptyCar.model);
console.log(emptyCar.year);

// Creating methods
car3.name = function() {
    return this.year.toString() + " " + this.brand + " " + this.model;
};
console.log(car3.name());

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.name = function() {
    return this.year.toString() + " " + this.brand + " " + this.model;
    }
}
let car4 = new Car("Ford", "Focus", 2002); 
console.log(car4.name());