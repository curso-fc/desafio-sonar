const calculadora = require('./index');

test("Somar 1 com 2 tem que ser 3", ()=> {
  expect(calculadora.somar(1,2)).toBe(3);
});

test("Subtrair 2 com 1 tem que ser 1", ()=> {
  expect(calculadora.subtrair(2,1)).toBe(1);
});

test("Multiplicar 2 com 2 tem que ser 4", ()=> {
  expect(calculadora.multiplicar(2,2)).toBe(4);
});

test("Dividir 4 com 2 tem que ser 2", ()=> {
  expect(calculadora.dividir(4,2)).toBe(2);
});

test("O resto da divisão entre 10 e 5 tem que ser 0", ()=> {
  expect(calculadora.obterRestoDivisao(10,5)).toBe(0);
});