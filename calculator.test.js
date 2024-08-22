const {Calculator} = require("./calculator");

test("test calculator", () => {
    const calc = new Calculator();
    expect(calc.add(1, 2)).toBe(3);
    expect(calc.add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(calc.sub(3, 2)).toBe(1);
    expect(calc.mul(3, 2)).toBe(6);
    expect(calc.div(3, 2)).toBe(1.5);
    expect(calc.div(3, 0)).toBe(Infinity);
    expect(calc.div(Infinity, Infinity)).toBe(NaN);
})
