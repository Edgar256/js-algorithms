const mutation = require('./mutation');

test('Return null for empty input', () => {
    expect(mutation()).toBe(null);
});

test('Return correct out', () => {
    expect(mutation(['Hello', 'Heo'])).toBe(true);
});