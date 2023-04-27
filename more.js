module.exports = {capitalize, reverseString};

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