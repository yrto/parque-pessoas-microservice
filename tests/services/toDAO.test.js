const { PessoaModel } = require("../../src/database/pessoa");
const criarDAO = require("../../src/services/criarDAO");

describe("Serviço de criação de DAO", () => {
  it("DAO é uma instância de PessoaModel", () => {
    const dao = criarDAO({
      nome: "Ayrton",
      idade: 29,
      meiaEntrada: false,
    });
    expect(dao instanceof PessoaModel).toBe(true);
  });

  it("DAO possui pessoaId", () => {
    const dao = criarDAO({
      nome: "Ayrton",
      idade: 29,
      meiaEntrada: false,
    });
    expect(dao.pessoaId).not.toBeUndefined();
  });
});
