const numberOfFactors = require('./numberOfFactors');

test('Return null for empty input', () => {
    expect(numberOfFactors()).toBe(null);
});

test('Return correct output', () => {
    expect(numberOfFactors(12)).toBe(6);
});