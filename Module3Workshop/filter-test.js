// Experimenting with the filter function

// Array of objects - employees
const employees = [{ id: 1, name: "Fred"}, { id: 2, name: "Sarah"}, { id: 3, name: "Michael"}];

// Array of objects - sales
const sales = [{ staffid: 1, item: "Coffee"}, { staffid: 1, item: "Horlicks"}, {staffid: 2, item: "Tea"}];

const employeeSales = employees;

for (let i = 0; i < employees.length; i++) {
    employeeSales[i].result =sales.filter((sale) => sale.staffid == employeeSales[i].id);
}

//console.log(employeeSales[2].result);

for (let i = 0; i < employeeSales.length; i++) {
    console.log(employeeSales[i]);
}

//employeeSales[0].sale = sales.filter(checkSale);


//let filteredSales = sales.filter((sale) => {
//    return sale.staffid == id});

//}
//for( let i = 0; i < employees.length; i++) {
 //   sales.filter(sale => sale.staffid == employees.id);
//}


//console.log("####################");
//console.log(filteredSales);
//console.log("####################");

//function  checkSale(staffid) {
//    return staffid == 1; 
//} 

//employeeSales[1].sale = sales[1];

//console.log("employees object array");
//console.log(employees);

//console.log("employeeSales object array");
//console.log(employeeSales);

//employeeSales = employees
