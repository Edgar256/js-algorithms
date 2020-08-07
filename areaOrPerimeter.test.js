const areaOrPerimeter = require('./areaOrPerimeter');

test('Return null for empty or invalid input', () => {
    expect(areaOrPerimeter()).toBe(null)
})

test('Return null for empty or invalid input', () => {
    expect(areaOrPerimeter('String')).toBe(null)
})

test('Return correct output', () => {
    expect(areaOrPerimeter(4, 4)).toBe(16)
})

test('Return correct output', () => {
    expect(areaOrPerimeter(5, 4)).toBe(18)
})