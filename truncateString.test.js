const truncateString = require('./truncateString');

test('Return null for empty str input', () => {
    expect(truncateString('', 8)).toBe(null);
});

test('Return null for empty number input', () => {
    expect(truncateString('Test me also')).toBe(null);
});

test('Give correct output', () => {
    expect(truncateString('A-tisket a-tasket A green and yellow basket', 8)).toBe('A-tisket...');
});