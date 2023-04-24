const {sum, sumDict, whiteChessPawn} = require('./sum')

test('Addition', () => {
    expect(sum(1,2)).toBe(3);
});

test('object assignment', () => {
    expect(sumDict(1,2)).toEqual({'first number' : 1, "second number" : 2, "third number" : 3})
});

test('White chess pawn can move forward', () => {
    for(i = 0, i < 2; i++;) {
        for(j = 0, i < 8; i++;){
            expect(whiteChessPawn([j, 2], [j, 2 + i])).toBeTruthy()
        }
    }
})