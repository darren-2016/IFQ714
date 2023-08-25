/** Helper function to round numeric value to specified number of places
 * If the number passed in is undefined or NaN, return as a null
 * @param {number} n
 * @param {number} places
 * @return {number}
 */
function precisionRound(n, places) {
    if ((n === undefined) || (n === NaN)) {
        return null;
    } else {
        return +(Math.round(n + 'e+' + places) + 'e-' + places);
    }
 }

 module.exports = {
    precisionRound
 }
 