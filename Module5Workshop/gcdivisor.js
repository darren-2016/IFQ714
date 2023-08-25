/**
 * Function to calculate greatest common divisor
 * using Euclidean algorithm and recursion
 * @param {number} a 
 * @param {number} b 
 * @returns {number} Greatest common divisor
 */
function greatestCommonDivisor(a, b) {
    if( b === 0) {
       return a;
    } else {
       return greatestCommonDivisor(b, a % b);
    }
 }
 
 console.log(greatestCommonDivisor(14,4));
