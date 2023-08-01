/* Module 3 Workshop
   The small Guava Computer Store keeps track of its employees and the sales their employees make. 
   The data is exported by their system into JSON format.
*/

// Include the Node file system, to use for reading in data files
const fs = require('fs');

// Read Employee data from external file (JSON format) into internal object
// Workshop_JSON_Employees.txt
const data = fs.readFileSync('./Workshop_JSON_Employees.txt', { encoding: 'utf8', flag: 'r'});
console.log(data);
let Employees = JSON.parse(data);
console.log(Employees);


// Read Sales data from external file (JSON format) into internal object
//Workshop_JSON_Sales.txt
const salesData = fs.readFileSync('./Workshop_JSON_Sales.txt', { encoding: 'utf8', flag: 'r'});
//console.log(salesData);
let Sales = JSON.parse(salesData);
//console.log(Sales);

//let numberOfEmployees = Employees.length;
//console.log(numberOfEmployees);

//let numberOfSales = Sales.length;
//console.log(numberOfSales);

// Function to output formatted version of the employee info
function showEmployeeInfo(employee) {
   if (employee === null) {
      console.log("Employee object not found");
   } else {
      console.log(`Name: ${employee.firstName} ${employee.lastName}\nStaff ID: ${employee.id}\nGender: ${employee.gender}\nAge: ${employee.age}\nPosition: ${employee.position}`);
   }
}

// Function to traverse all the employees and show information for each
function showAllEmployeesInfo(employees) {
   console.log("Show employees info");
   for (let i = 0; i < employees.length; i++) {
      showEmployeeInfo(employees[i]);
   }
}

// Function to return the data of one e,ployee, identified by the employee's ID
function findEmployeeByID(employeeID, employees) {
   for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === employeeID) {
         return employees[i];
      }
   }
   return null;
}

// Function to return the data of one sales object, identified by the employee's ID
function findSaleByID(staffId, sales) {
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
function showAllSalesInfo(sales) {
   console.log("Show sales info");
   for (let i = 0; i < sales.length; i++) {
      showSaleInfo(sales[i]);
   }
}



showAllEmployeesInfo(Employees);

showAllSalesInfo(Sales);

let foundEmployee = findEmployeeByID(12, Employees);
showEmployeeInfo(foundEmployee);

let foundSale = findSaleByID(4, Sales);
showSaleInfo(foundSale);
