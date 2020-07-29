const getDistinctValues = require('./getDistinctValues');

test('Return null for empty input or invalid input', () => {
    expect(getDistinctValues ()).toBe(null);
});

test('Return null for empty input or invalid input', () => {
    expect(getDistinctValues ('text')).toBe(null);
});

test('Return correct output', () => {
    expect(getDistinctValues ([2,4,2,2,2,1,1,2,3,4,5])).toBe(5);
});

test('Return correct output', () => {
    expect(getDistinctValues ([1,2,1,1])).toBe(2);
});