const findMedianSortedArrays = require('./findMedianSortedArrays');

test('Return null for empty or invalid input', () => {
    expect(findMedianSortedArrays()).toBe(null);
});

test('Return null for empty or invalid input', () => {
    expect(findMedianSortedArrays('string', 89)).toBe(null);
});

test('Return correct output', () => {
    expect(findMedianSortedArrays([1,3,4],[2])).toBe(2.5);
});
