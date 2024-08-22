const {capitalize, reverseString} = require('./string-operations');

test('test capitalization', () => {
    expect(capitalize("")).toBe("");
    expect(capitalize("A")).toBe("A");
    expect(capitalize("a")).toBe("A");
    expect(capitalize("Ab")).toBe("Ab");
    expect(capitalize("ab")).toBe("Ab");
    expect(capitalize("ab ab")).toBe("Ab ab");
    expect(capitalize("1ab ab")).toBe("1ab ab");
});

test('test reverse', () => {
    expect(reverseString("")).toBe("");
    expect(reverseString("q")).toBe("q");
    expect(reverseString("ab")).toBe("ba");
    expect(reverseString("abc")).toBe("cba");
});
