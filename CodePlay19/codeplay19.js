/**
 * Code-play 19: Callbacks
   Experimenting with callbacks
   In the TERMINAL window, use the following to execute the script:  node codeplay19.js 
  */

function sayHello(name) {
    console.log(`Hello ${name}!`);
}

function sayGoodbye(name) {
    console.log(`Goodbye ${name}!`);
}

function getPersonAndDoSomething(callback) {
    let person = "Fred";
    callback(person);
}

getPersonAndDoSomething(sayHello);
getPersonAndDoSomething(sayGoodbye);
