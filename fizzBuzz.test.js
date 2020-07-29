const fizzBuzz = require('./fizzBuzz');

test('Return null for empty or invalid input', () => {
    expect(fizzBuzz()).toBe(null);
})

test('Return null for empty or invalid input', () => {
    expect(fizzBuzz('string')).toBe(null);
})

test('Return correct output', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
})

test('Return correct output', () => {
    expect(fizzBuzz(21)).toBe('Fizz');
})

test('Return correct output', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
})

test('Return correct output', () => {
    expect(fizzBuzz(11)).toBe(11);
})