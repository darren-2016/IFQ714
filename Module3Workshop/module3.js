/* Module 3 Workshop
   The small Guava Computer Store keeps track of its employees and the sales their employees make. 
   The data is exported by their system into JSON format.
*/

const fs = require('fs');

// Read Employee data from external file into internal object
// Workshop_JSON_Employees.txt
const data = fs.readFileSync('./Workshop_JSON_Employees.txt', { encoding: 'utf8', flag: 'r'});
console.log(data);
let Employee = JSON.parse(data);
console.log(Employee);


// Read Sales data from external file into internal object
//Workshop_JSON_Sales.txt
const salesData = fs.readFileSync('./Workshop_JSON_Sales.txt', { encoding: 'utf8', flag: 'r'});
console.log(salesData);
let Sales = JSON.parse(salesData);
console.log(Sales);



//const jsonObj = JSON.stringify(myData);
//console.log(jsonObj);