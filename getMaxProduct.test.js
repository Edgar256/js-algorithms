const getMaxProduct = require('./getMaxProduct');

test('Return null for empty input or invalid input', () => {
    expect(getMaxProduct ()).toBe(null);
});

test('Return null for empty input or invalid input', () => {
    expect(getMaxProduct ([])).toBe(null);
});

test('Return null for arrays with length less than 3', () => {
    expect(getMaxProduct ([2, 6])).toBe(null);
});

test('Return correct output', () => {
    expect(getMaxProduct ([2, 4, 8, 0, 1, 3, 0, 4, 0,100])).toBe(3200);
});

test('Return correct output', () => {
    expect(getMaxProduct ([1,4,6,8,2,3,1,10,20,30,3,4])).toBe(6000);
});