import { soma } from "./math";

test("Deve somar dois números corretamente", () => {
  expect(soma(2, 3)).toBe(5);
  expect(soma(-1, 1)).toBe(0);
});
