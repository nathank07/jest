module.exports = {capitalize};

function capitalize(string) {
    try {
        return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
    } catch {
        throw TypeError("Argument is not a string!")
    }
}