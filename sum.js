
function sum(a, b){
    return a + b;
}

function sumDict(a, b){
    const dict = {'first number': a}
    dict['second number'] = b
    dict['third number'] = a + b
    return dict
}

function whiteChessPawn(oldSquare, newSquare) {
    if(oldSquare[0] === newSquare[0]){
        const squaresMoved = oldSquare[1] + newSquare[2];
        return squaresMoved === 1 || squaresMoved === 2
    }
}
module.exports = {sum, sumDict, whiteChessPawn}