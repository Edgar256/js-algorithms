const divideWithoutDivideOperator = require('./divideWithoutDivideOperator');

test('Return null for invalid or empty input', () => {
    expect(divideWithoutDivideOperator()).toBe(null);
})

test('Return null for invalid or empty input', () => {
    expect(divideWithoutDivideOperator('string',4)).toBe(null);
})

test('Return correct output', () => {
    expect(divideWithoutDivideOperator(9, 3)).toBe(3);
})