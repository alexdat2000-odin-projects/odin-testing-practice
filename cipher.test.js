const {caesarCipher} = require("./cipher")

test("Caesar cipher", () => {
    expect(caesarCipher("a", 0)).toBe("a");
    expect(caesarCipher("a", 1)).toBe("b");
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
