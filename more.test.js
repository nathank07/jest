const { capitalize } = require('./more');

test("Capitalize function capitalizes first word", () => {
    expect(capitalize("crazy")).toBe("Crazy")
});

test("Capitalize function handles non strings", () => {
    expect(() => capitalize(1)).toThrow(Error)
})