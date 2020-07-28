const moveZeros = require('./moveZeros');

test('Return null for empty input or invalid input', () => {
    expect(moveZeros()).toBe(null);
});

test('Return correct output', () => {
    expect(moveZeros([ 9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9 ])).toStrictEqual([9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

test('Return correct output', () => {
    expect(moveZeros([ 'word', 0, 'text', 0, '0' ])).toStrictEqual([ 'word', 'text', '0', 0, 0 ]);
});