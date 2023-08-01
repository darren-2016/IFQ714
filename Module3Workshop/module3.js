/* Module 3 Workshop

   The small Guava Computer Store keeps track of its employees and the sales their employees make. 
   The data is exported by their system into JSON format.
*/

// Include the Node file system, to use for reading in data files
const fs = require('fs');

// Specify the filename with path, of the employee and sales data files
const employeeDataFile = './Workshop_JSON_Employees.txt';
const salesDataFile = './Workshop_JSON_Sales.txt';


// Read Employee data from external file (JSON format) into internal object
const employeeData = fs.readFileSync(employeeDataFile, { encoding: 'utf8', flag: 'r'});
let employees = JSON.parse(employeeData);

// Read Sales data from external file (JSON format) into internal object
const salesData = fs.readFileSync(salesDataFile, { encoding: 'utf8', flag: 'r'});
let sales = JSON.parse(salesData);


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
   console.log("Showing all employees info");
   for (let i = 0; i < employees.length; i++) {
      showEmployeeInfo(employees[i]);
   }
}

// Function to return the data of one employee, identified by the employee's ID
// Returns the employee object correspoding to the employee ID or null if employee ID not found
function findEmployeeByID(employeeID) {
   for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === employeeID) {
         return employees[i];
      }
   }
   return null;
}

// Function to return the data of one sales object, identified by the staff ID
// Returns the sales object correspoding to the staff ID or null if staff ID not found
function findSaleByID(staffId) {
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
   console.log("Showing sales info");
   for (let i = 0; i < sales.length; i++) {
      showSaleInfo(sales[i]);
   }
}

// Function to find employees with a certain property - position
function findEmployeesByPosition(position) {
   for (let i = 0; i < employees.length; i++) {
      if (employees[i].position === position) {
         console.log(`Employee with ID ${employees[i].id} is a ${position}\n`);
      }
   }
}

// Function to find employees with a certain property - gender
function findEmployeesByGender(gender) {
   for (let i = 0; i < employees.length; i++) {
      if (employees[i].gender === gender) {
         console.log(`Employee with ID ${employees[i].id} is ${gender}\n`);
      }
   }
}

// Function to find sales with a certain property - sales over a given value in dollars
function findSalesByValue(value) {
   for (let i = 0; i < sales.length; i++) {
      if (sales[i].price >= value) {
         console.log(`Item ${sales[i].item} is ${sales[i].price} dollars\n`);
      }
   }
}

console.log("\nSHOW ALL EMPLOYEES INFO\n=======================");
showAllEmployeesInfo();
console.log("\nSHOW ALL SALES INFO\n===================");
showAllSalesInfo();

console.log("\nFIND EMPLOYEE BY ID\n===================");
showEmployeeInfo(findEmployeeByID(12));

console.log("\nFIND SALE BY STAFF ID\n=====================");
showSaleInfo(findSaleByID(1));
showSaleInfo(findSaleByID(4));

console.log("\nFIND EMPLOYEE BY POSITION\n=========================");
findEmployeesByPosition("Salesperson");

console.log("\nFIND EMPLOYEE BY GENDER\n=======================");
findEmployeesByGender("Female");
findEmployeesByGender("Male");
findEmployeesByGender("Non-Binary");

console.log("\nFIND SALES BY MINIMUM VALUE\n===========================");
findSalesByValue(10);
