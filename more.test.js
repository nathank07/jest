const { capitalize, reverseString, calculator } = require('./more');

test("Capitalize function capitalizes first word", () => {
    expect(capitalize("crazy")).toBe("Crazy")
});

test("Capitalize function handles non strings", () => {
    expect(() => capitalize(1)).toThrow(TypeError)
})

test("reverseString function reverses string", () => {
    expect(reverseString("xyz")).toBe("zyx");
    expect(reverseString("racecar")).toBe("racecar");
    expect(reverseString("abcdefg")).toBe("gfedcba");
})

test("reverseString function rejects non string", () => {
    expect(() => reverseString(123)).toThrow(TypeError);
    expect(() => reverseString()).toThrow(TypeError);
})

test("Calculator adds properly", () => {
    expect(calculator.sum(1,2)).toBe(3);
    expect(calculator.sum(1.2,2.5)).toBe(3.7);
    expect(calculator.sum(0.1,0.2)).toBe(0.3);
})

test("Calculator subtracts properly", () => {
    expect(calculator.subtract(1,2)).toBe(-1);
    expect(calculator.subtract(1.2,2.5)).toBe(-1.3);
    expect(calculator.subtract(0.1,0.2)).toBe(-0.1);
    expect(calculator.subtract(782,100)).toBe(682);
})

test("Calculator multiplies properly", () => {
    expect(calculator.multiply(1,2)).toBe(2);
    expect(calculator.multiply(1.2,2.5)).toBe(3);
    expect(calculator.multiply(0.1,0.2)).toBe(0.02);
    expect(calculator.multiply(782,100)).toBe(78200);
})

test("Calculator divides properly", () => {
    expect(calculator.divide(1,2)).toBe(0.5);
    expect(calculator.divide(1.2,2.5)).toBe(0.48);
    expect(calculator.divide(0.1,0.2)).toBe(0.5);
    expect(calculator.divide(782,100)).toBe(7.82);
    expect(() => calculator.divide(1,0)).toThrow(Error);
})

test("Calculator rejects non numbers", () => {
    expect(() => calculator.sum("x", "y")).toThrow(TypeError);
    expect(() => calculator.subtract()).toThrow(TypeError);
    expect(() => calculator.multiply("1", "3")).toThrow(TypeError);
    expect(() => calculator.divide("4")).toThrow(TypeError);
})