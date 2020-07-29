const highestScoringWord = require('./highestScoringWord');

test('Return null for empty input or invalid input', () => {
    expect(highestScoringWord()).toBe(null);
});

test('Return correct output', () => {
    expect(highestScoringWord('hello my people')).toBe('people');
});