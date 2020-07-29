const halvingSum = require('./halvingSum');

test('Return null for empty input or invalid input', () => {
    expect(halvingSum ()).toBe(null);
});

test('Return correct output', () => {
    expect(halvingSum (10)).toBe(8);
});

test('Return correct output', () => {
    expect(halvingSum (25)).toBe(22);
});