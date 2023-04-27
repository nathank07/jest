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

module.exports = { capitalize, reverseString, calculator };
