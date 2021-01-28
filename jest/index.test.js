const { capitalize, reverseString, calculator, caesar, makeObject } = require('./functions');


test('returns string with first letter capitalised', () => {
  expect(capitalize('test')).toBe('Test');
});

test('returns string in reversed order', () => {
    expect(reverseString('test')).toBe('tset');
});

test('calculates two figures', () => {
    expect(calculator.add(3,4)).toBe(7);
    expect(calculator.subtract(3,4)).toBe(-1);
    expect(calculator.multiply(3,4)).toBe(12);
    expect(calculator.divide(9,3)).toBe(3);
});

test('returns string in reversed order', () => {
    expect(caesar('xyz', 3)).toBe('abc');
});

test('returns analysis of array', () => {
    expect(makeObject([6,2,70,4.5,4])).toStrictEqual({length: 5, max: 70, min: 2, total: 86.5});
});