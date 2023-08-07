// Import the function from the base file.
const parseThenSquare = require("./codeplay13");

// Test with an input of "10"
test('Input of "10", putput of 100.', () => {
    expect(parseThenSquare("10")).toBe(100);
});

// Test with an input of 10
test('Input of 10, output of 100.', () => {
    expect(parseThenSquare(10)).toBe(100);
});

// Test with an input of "ten"
test('Input of "ten", output of null.', () => {
    expect(parseThenSquare("ten")).toBe(null);
});

// Test with an input of undefined
test('Input of undefined, output of undefined.', () => {
    expect(parseThenSquare(undefined)).toBe(undefined);
});
