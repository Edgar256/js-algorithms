const missingNumber = require('./missingNumber');

test('Return null for empty input or invalid input', () => {
    expect(missingNumber()).toBe(null);
});

test('Return null for empty input or invalid input', () => {
    expect(missingNumber([1,3,4,5,6])).toBe(2);
});