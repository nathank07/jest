function capitalize(string) {
    try {
        return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
    } catch {
        throw TypeError("Argument is not a string!")
    }
}

function reverseString(string){
    if(typeof string === "string"){
        return string.split("").reverse().reduce((prev, x) => prev += x);
    } else {
        throw TypeError("Argument is not a string!")
    }
}

const calculator = {
    checkTypes(num1, num2){
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new TypeError('Both arguments must be numbers');
        }
    },
    sum(num1, num2){
        this.checkTypes(num1, num2);
        return Number((num1 + num2).toFixed(10));
    },
    subtract(num1, num2){
        this.checkTypes(num1, num2);
        return Number((num1 - num2).toFixed(10));
    },
    multiply(num1, num2){
        this.checkTypes(num1, num2);
        return Number((num1 * num2).toFixed(10));
    },
    divide(num1, num2){
        this.checkTypes(num1, num2);
        if(num2 === 0){
            throw new Error('Cannot divide by 0')
        }
        return Number((num1 / num2).toFixed(10));
    },
}

function caesarCipher(string, shiftValue){
    if(typeof string !== "string"){
        throw new TypeError('First argument must be a string')
    }
    if(!Number.isInteger(shiftValue)){
        throw new TypeError('Second argument must be an integer')
    }
    const charArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    let convertedString = string.split("").map(char => {
        let charLoc = charArr.indexOf(char);
        if(charLoc === -1) { return char }
        charLoc += shiftValue;
        while(charLoc > 26){
            charLoc -= 26;
        }
        return charArr[charLoc];
    })
    return convertedString.reduce((prev, curr) => prev += curr)
}

module.exports = { capitalize, reverseString, calculator, caesarCipher };
