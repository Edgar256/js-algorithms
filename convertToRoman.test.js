const convertToRoman = require('./convertToRoman');

test('Return null for empty or invalid input', () => {
    expect(convertToRoman()).toBe(null);
})

test('Return null for empty or invalid input', () => {
    expect(convertToRoman('String')).toBe(null);
})

test('Return correct output', () => {
    expect(convertToRoman(400)).toBe('CD');
})

test('Return correct output', () => {
    expect(convertToRoman(430)).toBe('CDXXX');
})