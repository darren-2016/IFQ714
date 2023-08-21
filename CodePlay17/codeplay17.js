/**
 * Code-play 17: Functional programming techniques
   Experimenting with functional programming techniques
   In the TERMINAL window, use the following to execute the script:  node codeplay17.js 
  */

const addOne = function (element) {
    return element + 1;
}
const numbers = [1, 2, 3, 4];
const newNumbers = numbers.map(addOne);
console.log(newNumbers);
