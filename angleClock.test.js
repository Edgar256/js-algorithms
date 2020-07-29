const angleClock = require('./angleClock');

test('Return null for empty or invalid input', () => {
    expect(angleClock()).toBe(null)
})

test('Return null for empty or invalid input', () => {
    expect(angleClock('String')).toBe(null)
})

test('Return correct output', () => {
    expect(angleClock(12,30)).toBe(165)
})