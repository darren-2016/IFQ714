/**
 * Module 5 Workshop 
 *
 * The small Guava Computer Store keeps track of its employees and the sales their employees make. 
 * The data is exported by their system into JSON format.
 */

// Include the Node file system, to use for reading in data files
const fs = require('fs');

// Specify the filename with path, of the employee and sales data files
const employeeDataFile = './Workshop_JSON_Employees.json';
const salesDataFile = './Workshop_JSON_Sales.txt';


// Read Employee data from external file (JSON format) into internal object
const employeeData = fs.readFileSync(employeeDataFile, { encoding: 'utf8', flag: 'r'});

   console.log(employeeData);
const employees = JSON.parse(employeeData);

// Read Sales data from external file (JSON format) into internal object
const salesData = fs.readFileSync(salesDataFile, { encoding: 'utf8', flag: 'r'});
const sales = JSON.parse(salesData);


// Function to output formatted version of the employee info
// If the employee parameter is null then indicate employee not found
function showEmployeeInfo(employee) {
   if (employee === null) {
      console.log("Employee not found");
   } else {
      console.log(`Name: ${employee.firstName} ${employee.lastName}\nStaff ID: ${employee.id}\nGender: ${employee.gender}\nAge: ${employee.age}\nPosition: ${employee.position}\n`);
   }
}

// Function to traverse all the employees and show information for each
function showAllEmployeesInfo() {
   employees.forEach(function (element) { showEmployeeInfo(element); });
}

// Function to return the data of one employee, identified by the employee's ID
// Returns the employee object correspoding to the employee ID or null if employee ID not found
function findEmployeeById(employeeId) {
   let foundEmployee = null;
   employees.forEach(function(element) {  
   if(element.id === employeeId) foundEmployee = element;} );
   return foundEmployee;
}

// Function to return the data of one sales object, identified by the staff ID
// Returns the sales object correspoding to the staff ID or null if staff ID not found
function findSaleById(staffId) {
   for (let i = 0; i < sales.length; i++) {
      if (sales[i].staffId === staffId) {
         return sales[i];
      }
   }
   return null;
}

// Function to output formatted version of the sale info
// If the sale parameter is null then indicate sale not found
function showSaleInfo(sale) {
   if (sale === null) {
      console.log("Sale not found\n");
   } else {
      console.log(`Item: ${sale.item}\nPrice: ${sale.price}\nDate of sale: ${sale.date}\nID of Staff Member: ${sale.staffId}\n`);
   }
}

// Function to traverse all the sales and show information for each
function showAllSalesInfo() {
   sales.forEach(function(element) { element => { showSaleInfo(element); } });
}

// Function to find employees with a certain property - position
function findEmployeesByPosition(position) {
   employees.forEach(function(element) { if (element.position === position) console.log(`Employee with ID ${element.id} is a ${position}\n`); });
}

// Function to find employees with a certain property - gender
function findEmployeesByGender(gender) {
   employees.forEach(function(element) { if (element.gender === gender) console.log(`Employee with ID ${element.id} is a ${gender}\n`); });
}

// Function to find sales with a certain property - sales over a given value in dollars
function findSalesByValue(value) {
   sales.forEach(function(element) { if (element.price >= value) console.log(`Item ${element.item} is ${element.price} dollars\n`); });
}

// Function to find sales with a certain property - sales over a given value in dollars
function findSalesById(id) {
   let salesById = [];
   for (let i = 0, j = 0; i < sales.length; i++) {
      if (sales[i].staffId === id) {
         //console.log(sales[i]);
         salesById[j++] = sales[i];
      }
   }
   return salesById;
}

// BONUS TASKS
// Create object that combines employee and sales record
let employeeSales = employees;

for (let i = 0; i < employeeSales.length; i++) {
   employeeSales[i].sales =sales.filter((sale) => sale.staffId == employeeSales[i].id);
 }
 
function mapSalesWithEmployee() { // TBD
   //console.log(employees);
   //console.log(sales);
   const newEmployee = Object.assign([], employees);
   employees.map(function(employee, index) {
      //console.log("newEmployee : " + newEmployee.id + " " + newEmployee.lastName);
      //console.log("sales : " + sales[0].staffId);
      newEmployee[index].sales = sales.filter(function(element) { return element.staffId === employee.id;});
   });
   return newEmployee;
}

//Function to display  formatted information on 
// an employee and all the sales they have made
function displayEmployeeSaleInfo(employeeId) {
   let emp = employeeSales[employeeId];

   console.log(emp);
   if (emp.sales.length === 0) {
      console.log(`${emp.firstName} ${emp.lastName} made no sales.\n`);
   } else {
      console.log(`${emp.firstName} ${emp.lastName} has made ${emp.sales.length} ${emp.sales.length > 1 ? 'sales' : 'sale'}.\n`);
   }
}

// Test calls
console.log("\nSHOW ALL EMPLOYEES INFO\n=======================");
showAllEmployeesInfo();

console.log("\nSHOW ALL SALES INFO\n===================");
showAllSalesInfo();

console.log("\nFIND EMPLOYEE BY ID\n===================");
showEmployeeInfo(findEmployeeById(12));

console.log("\nFIND SALE BY STAFF ID\n=====================");
showSaleInfo(findSaleById(1));
showSaleInfo(findSaleById(4));

console.log("\nFIND EMPLOYEE BY POSITION\n=========================");
findEmployeesByPosition("Salesperson");

console.log("\nFIND EMPLOYEE BY GENDER\n=======================");
findEmployeesByGender("Female");
findEmployeesByGender("Male");
findEmployeesByGender("Non-Binary");

console.log("\nFIND SALES BY MINIMUM VALUE\n===========================");
findSalesByValue(10);

console.log("\nDISPLAY FORMATTED INFORMATION ON EMPLOYEES AND THE SALES THEY HAVE MADE (BONUS TASK)\n====================================================================================");

displayEmployeeSaleInfo(0);
displayEmployeeSaleInfo(1);
displayEmployeeSaleInfo(2);
displayEmployeeSaleInfo(3);
displayEmployeeSaleInfo(4);

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

/**
 * Calculate the sales commission for each employee
 */
function salesCommission () {
   employeeSalesList.forEach(function(employee) { 
      try {
         if (employee.sales.length < 1) {
            throw new Error("Employee made no sales");
         } else {
            let salesTotal = 0;
            employee.sales.forEach(function(sale) {
               salesTotal += sale.price;
            });
            let commission = salesTotal * 0.1;
            console.log(`Employee received commision of $${precisionRound(commission, 2)}`);
         }
      }
      catch (error) {
         console.log(`Unable to calculate commission for employee ${employee.id}: ${error.message}`);
      }
   });
}

const employeeSalesList = mapSalesWithEmployee();
console.log("********************************************");
console.log("********************************************");
console.log(employeeSalesList);
console.log("********************************************");
console.log("********************************************");

salesCommission();

console.log("********************************************");
console.log("********************************************");

/**
 * Recursive function to calculate greatest common divisor
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function greatestCommonDivisor(a, b) {
   if( b === 0) {
      return a;
   } else {
      return greatestCommonDivisor(b, a % b);
   }
}

console.log(greatestCommonDivisor(14,4));


module.exports = findEmployeeById;



