const repeatStringNumTimes = require('./repeatStringNumTimes');

test('Return null for empty str input', () => {
    expect(repeatStringNumTimes('', 3)).toBe(null);
});
test('Return same out if number is one', () => {
    expect(repeatStringNumTimes('Test Word', 1)).toBe('Test Word');
});
test('Return correct out', () => {
    expect(repeatStringNumTimes('Test Word', 3)).toBe('Test WordTest WordTest Word');
});