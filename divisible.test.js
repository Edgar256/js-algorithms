const divisible = require('./divisible');

test('Return null for empty or invalid input', () => {
    expect(divisible()).toBe(null);
})

test('Return null if B is greater than A', () => {
    expect(divisible(10,0,2)).toBe(null);
})

test('Return correct output', () => {
    expect(divisible(0,10,2)).toBe(4);
})

test('Return correct output', () => {
    expect(divisible(0,10,3)).toBe(3);
})

test('Return correct output', () => {
    expect(divisible(0,20,2)).toBe(9);
})