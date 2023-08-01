/* Module 3 Workshop

   The small Guava Computer Store keeps track of its employees and the sales their employees make. 
   The data is exported by their system into JSON format.
*/

// Include the Node file system, to use for reading in data files
const fs = require('fs');

// Specify the 
const employeeDataFile = './Workshop_JSON_Employees.txt';
const salesDataFile = './Workshop_JSON_Sales.txt';


// Read Employee data from external file (JSON format) into internal object
const employeeData = fs.readFileSync(employeeDataFile, { encoding: 'utf8', flag: 'r'});
let employees = JSON.parse(employeeData);

// Read Sales data from external file (JSON format) into internal object
const salesData = fs.readFileSync(salesDataFile, { encoding: 'utf8', flag: 'r'});
let sales = JSON.parse(salesData);

// Function to output formatted version of the employee info
function showEmployeeInfo(employee) {
   if (employee === null) {
      console.log("Employee object not found");
   } else {
      console.log(`Name: ${employee.firstName} ${employee.lastName}\nStaff ID: ${employee.id}\nGender: ${employee.gender}\nAge: ${employee.age}\nPosition: ${employee.position}`);
   }
}

// Function to traverse all the employees and show information for each
function showAllEmployeesInfo() {
   console.log("Show employees info");
   for (let i = 0; i < employees.length; i++) {
      showEmployeeInfo(employees[i]);
   }
}

// Function to return the data of one employee, identified by the employee's ID
function findEmployeeByID(employeeID) {
   for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === employeeID) {
         return employees[i];
      }
   }
   return null;
}

// Function to return the data of one sales object, identified by the employee's ID
function findSaleByID(staffId) {
   for (let i = 0; i < sales.length; i++) {
      if (sales[i].staffId === staffId) {
         return sales[i];
      }
   }
   return null;
}

// Function to output formatted version of the sale info
function showSaleInfo(sale) {
   if (sale === null) {
      console.log("Sale object not found");
   } else {
      console.log(`Item: ${sale.item}\nPrice: ${sale.price}\nDate of sale: ${sale.date}\nID of Staff Member: ${sale.staffId}`);
   }
}

// Function to traverse all the sales and show information for each
function showAllSalesInfo() {
   console.log("Show sales info");
   for (let i = 0; i < sales.length; i++) {
      showSaleInfo(sales[i]);
   }
}

// Function to find employees with a certain property - position
function findEmployeesByPosition(position) {
   for (let i = 0; i < employees.length; i++) {
      if (employees[i].position === position) {
         console.log(`Employee with ID ${employees[i].id} is a ${position}`);
      }
   }
}

// Function to find employees with a certain property - gender
function findEmployeesByGender(gender) {
   for (let i = 0; i < employees.length; i++) {
      if (employees[i].gender === gender) {
         console.log(`Employee with ID ${employees[i].id} is ${gender}`);
      }
   }
}

// Function to find sales with a certain property - sales over a given value in dollars
function findSalesByValue(value) {
   for (let i = 0; i < sales.length; i++) {
      if (sales[i].price >= value) {
         console.log(`Item ${sales[i].item} is ${sales[i].price}`);
      }
   }
}


showAllEmployeesInfo();

showAllSalesInfo();

let foundEmployee = findEmployeeByID(12);
showEmployeeInfo(foundEmployee);

let foundSale = findSaleByID(4);
showSaleInfo(foundSale);

findEmployeesByPosition("Salesperson");

findEmployeesByGender("Female");
findEmployeesByGender("Male");
findEmployeesByGender("Non-Binary");

findSalesByValue(10);
