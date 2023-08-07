// Import the function from the base file
const findEmployeeById = require("./module4");

// Test with an input of 2
test('Show employee info.', () => {
    let testFunction = findEmployeeById(2);
    expect(testFunction).toEqual({id:2, firstName:"Mary", lastName:"Sue", gender:"Female", age:32, position:"Salesperson", "sales": [
        {
            "date":"06-09-2022",
            "item": "USB Stick",
            "price": 10.99,
            "staffId": 2
        }
        ]});
});
