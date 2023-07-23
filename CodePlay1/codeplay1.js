/* Code-play 1: Variables and types
   Experimenting with JavaScript Objects.
   In the TERMINAL window, use the following to execute the script:  node codeplay4.js 
  */

// Declaration of variables
let hello;
hello = "Hello";
console.log (hello);

let five = 5;
console.log(five);

const inUse = true;
console.log(inUse);

// Using operators
// 1. Numbers
console.log(5 + 4);
console.log(5 - 4);
console.log(5 * 4);
console.log(5 / 4);
console.log(5 % 4);

console.log(5 + 4 - 3);
console.log(5 + 4 * 3);

console.log((5 + 4) - 3);
console.log((5 + 4) * 3);

console.log((five + 4) - 3);
console.log((five + 4) * 3);

// 2. Strings
console.log("Hello" + "World");
console.log("Hello" + " " + "World" + "!");
console.log("Hello" + 5);
console.log(hello + "world");
console.log("This and\\or that");
console.log("This is the first line,\nthat on the second line");

// 3. Booleans
console.log(true && false);
console.log(true || false);
console.log(!true);

console.log(9 ==5);
console.log(9 != 5);
console.log(9 > 5);
console.log(9 <= 5);

console.log("9" == 9);
console.log("9" === 9);

console.log(five == 5);

// Errors with variables - uncomment to see the errors in the node interpreter
//let five = "five";
//inUse = false;
console.log("hello" - 5);
console.log("5" - 5);