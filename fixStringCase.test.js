const fixStringCase = require('./fixStringCase');

test('Return null for empty or invalid input', () => {
    expect(fixStringCase()).toBe(null)
})


test('Return correct output', () => {
    expect(fixStringCase('code')).toBe('code')
})

test('Return correct output', () => {
    expect(fixStringCase('cODe')).toBe('code')
})

test('Return correct output', () => {
    expect(fixStringCase('cODE')).toBe('CODE')
})

