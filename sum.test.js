const sum = require('./sum')

test('Addition', () => {
    expect(sum(1,2)).toBe(3);
});