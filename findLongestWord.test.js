const findLongestWord = require('./findLongestWord');

test('Return null for empty of invalid input', () => {
    expect(findLongestWord()).toBe(null);
})

test('Return correct output', () => {
    expect(findLongestWord('The quick brown fox jumped over the lazy dog')).toBe('jumped');
})