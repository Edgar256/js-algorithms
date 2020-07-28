const towerBuilder = require('./towerBuilder');

test('Return null for empty input', () => {
    expect(towerBuilder()).toStrictEqual(null);
});

test('Return correct output', () => {
    expect(towerBuilder(5)).toStrictEqual([ '    *    ', '   ***   ', '  *****  ', ' ******* ', '*********' ]);
});

