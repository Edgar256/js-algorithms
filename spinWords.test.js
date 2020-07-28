const spinWords = require('./spinWords');

test('properly reverse strings with minimum length 3', () => {
    expect(spinWords('hey Edgar pat earnest',3)).toBe('yeh ragdE tap tsenrae')
});

test('properly reverse strings with minimum length 3', () => {
    expect(spinWords('hey Edgar , is it you',3)).toBe('yeh ragdE , is it uoy')
});

test('return null for empty input', () => {
    expect(spinWords('  ',3)).toBe(null)
})



