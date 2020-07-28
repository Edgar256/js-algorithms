const spinWords = require('./spinWords');

test('properly reverse strings with minimum length 3', () => {
    expect(spinWords('Hey fellow warriors', 5)).toBe('Hey wollef sroirraw')
});

test('properly reverse strings with minimum length 3', () => {
    expect(spinWords('This is a test',4)).toBe('sihT is a tset')
});

test('return null for empty input', () => {
    expect(spinWords('  ',3)).toBe(null)
})



