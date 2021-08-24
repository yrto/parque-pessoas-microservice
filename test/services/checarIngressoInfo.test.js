const checarIngressoInfo = require("../../src/services/checarIngressoInfo");

describe("Checa e retorna dados sobre o ingresso", () => {
  it("Identifica ingresso CHEIO", () => {
    expect(
      checarIngressoInfo({
        idade: 30,
        meiaEntrada: false,
      })
    ).toStrictEqual({
      tipoIngresso: "Cheio",
      valorIngresso: 175,
    });
  });
  it("Identifica ingresso MEIA", () => {
    expect(
      checarIngressoInfo({
        idade: 30,
        meiaEntrada: true,
      })
    ).toStrictEqual({
      tipoIngresso: "Meia",
      valorIngresso: 87.5,
    });
  });
  it("Identifica ingresso INFANTIL", () => {
    expect(
      checarIngressoInfo({
        idade: 10,
        meiaEntrada: false,
      })
    ).toStrictEqual({
      tipoIngresso: "Infantil",
      valorIngresso: 75,
    });
  });
});
test("Checa informações do ingresso e retorna objeto com os dados", () => {});
