const { capitalize, reverseString } = require('./more');

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