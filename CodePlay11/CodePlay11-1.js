/* Code-play 11-1: Console output
   Experimenting with console output for testing/debugging
   In the TERMINAL window, use the following to execute the script:  node codeplay11.js 
  */

   // Example code for testing.

   // Value to test with.
   const testValue = "ten";

   // Function for squaring numbers from a string, if it can be parsed.
   function parseThenSquare(input) {
    console.log("Entering function parseThenSquare");
    let num = Number.parseInt(input);
    console.log(`The input was parsed to ${num}`);
    if (!Number.isNaN(num)) {
        console.log("Returning square of number");
        return num * num;
    } else {
        console.log("Returning null");
        return null;
    }
}

// Call the function with the test value and show the result.
console.log(parseThenSquare(testValue));
