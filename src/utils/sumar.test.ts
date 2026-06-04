import { sumar } from "./sumar";

describe("sumar", () => {
  test("suma dos números correctamente", () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test("suma con cero", () => {
    expect(sumar(5, 0)).toBe(5);
  });

  test("suma números negativos", () => {
    expect(sumar(-1, -2)).toBe(-3);
  });
});