// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

test("One dollar should be 146.26 yens", function() {
    //importar la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(10);
    const expected = 10 * 146.26;

    expect(fromDollarToYen(10)).toBe(1462.6); //si 1 dolar son 146.26 yenes, 10 deberian ser 1462.6
});

test("One yen should be 0.00556 GBP", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(10);
    const expected = 1000 * 0.00556;

    expect(fromYenToPound(1000)).toBe(5.56);
})