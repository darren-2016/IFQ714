/**
 * Code-play 16: JavaScript errors
   Experimenting with JavaScript errors
   In the TERMINAL window, use the following to execute the script:  node codeplay15.js 
  */

//console.log(bielefeld)


//throw 6;

//throw "tantrum";

//throw true;

/*console.log ("Before the error");

throw new Error("Something went wrong!");

throw new RangeError("Too far to throw that ball");

throw new ReferenceError("I didn't understand that reference");

throw new SyntaxError("Where's the Oxford comma?");

throw TypeError("This is a computer, not a typewriter");

throw new URIError("We haven't used URIs before");

console.log("After the error");
*/

function tryCatch() {
    try {
        console.log("Does this code have an error?");
        throw new Error("Yes it does");
        console.log("No it doesn't");
    } catch {
        console.log("Encountered an error");
    }
    console.log("Ending the function");
}
tryCatch();

console.log ("***************************");

function tryCatch2() {
    try {
        console.log("Does this code have an error?");
        throw new Error("Yes it does");
        console.log("No it doesn't");
    } catch (error){
        console.log(`An ${error.name} was thrown, with the message ${error.message}`);
    }
    console.log("Ending the function");
}
tryCatch2();

console.log ("***************************");

function tryCatchFinally() {
    console.log("Code before all blocks");
    try {
        console.log(newVariable.toString());
        console.log("Code inside try block");
    } catch {
        console.log(anotherNewVariable.toString());
        console.log("Code inside catch block");
    } finally {
        console.log("Code inside finally block");
    }
    console.log("Code after all the blocks");
}
tryCatchFinally();
