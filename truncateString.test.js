const truncateString = require('./truncateString');

test('properly reverse strings with minimum length 3', () => {
    expect(truncateString('A-tisket a-tasket A green and yellow basket', 8)).toBe('A-tisket...');
});