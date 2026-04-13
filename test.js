const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

console.log("Función               Entrada   Salida");

// Test Euro → Dollar
test("fromEuroToDollar", function() {
    const input = 3.5;
    const output = fromEuroToDollar(input);
    console.log(`fromEuroToDollar       ${input}        ${output}`);
    expect(output).toBeCloseTo(input * 1.07);
});

// Test Dollar → Yen
test("fromDollarToYen", function() {
    const input = 1;
    const output = fromDollarToYen(input);
    console.log(`fromDollarToYen        ${input}        ${output}`);
    const expected = (input / 1.07) * 156.5;
    expect(output).toBeCloseTo(expected);
});

// Test Yen → Pound
test("fromYenToPound", function() {
    const input = 156.5;
    const output = fromYenToPound(input);
    console.log(`fromYenToPound         ${input}        ${output}`);
    const expected = (input / 156.5) * 0.87;
    expect(output).toBeCloseTo(expected);
});