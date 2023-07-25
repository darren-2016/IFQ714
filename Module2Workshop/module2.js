/* Module 2 Workshop
   The small Guava Computer Store keeps track of its employees and the sales their employees make. 
   The data is exported by their system into JSON format.
*/

// Step 1
// Create some employee and sale objects
const employee1 = JSON.parse('{"id":1, "firstName":"John", "lastName":"Smith", "gender":"Male", "age":23, "position":"Manager"}');
console.log(employee1);

const sale1 = JSON.parse('{"staffId":1, "item":"Wi-Fi Adapter", "price":40.00, "date":"01-09-2022"}');
console.log(sale1);

// Step 2
// Function to output formatted version of the employee info
function showEmployeeInfo(employee) {
    console.log(`Name: ${employee.firstName} ${employee.lastName}\nStaff ID: ${employee.id}\nGender: ${employee.gender}\nAge: ${employee.age}\nPosition: ${employee.position}`);
}

// Function to output formatted version of the sale info
function showSaleInfo(sale) {
    console.log(`Item: ${sale.item}\nPrice: ${sale.price}\nDate of sale: ${sale.date}\nID of Staff Member: ${sale.staffId}`);
}

showEmployeeInfo(employee1);
showSaleInfo(sale1);

// Step 3
// Constructor to define a new employee
function Employee(id, firstName, lastName, gender, age, position) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.position = position;

    this.showInfo = function() {
        showEmployeeInfo(this);
    }

    this.toString = function() {
        return `Name: ${this.firstName} ${this.lastName}\nStaff ID: ${this.id}\nGender: ${this.gender}\nAge: ${this.age}\nPosition: ${this.position}`;
    }
}

// Constructor to define a new sale
function Sale(staffId, item, price, date) {
    this.staffId = staffId;
    this.item = item;
    this.price = price;
    this.date = date;

    this.showInfo = function() {
        showSaleInfo(this);
    }

    this.toString = function() {
        return `Item: ${this.item}\nPrice: ${this.price}\nDate of sale: ${this.date}\nID of Staff Member: ${this.staffId}`;
    }
}

// Create a new employee
let employee2 = new Employee(2, "Mary", "Sue", "Female", 32, "Salesperson");


// Create a new sale
let sale2 = new Sale(1, "Wi-Fi Adapter", 40.00, "03-09-2022");


// Step 4
// Create arrays for the employee and sale objects
let employees = [employee1, employee2];
let sales = [sale1, sale2];

console.log(employees);
console.log(sales);



// Bonus tasks
employee2.showInfo();
sale2.showInfo();

console.log(employee2.toString());
console.log(sale2.toString());