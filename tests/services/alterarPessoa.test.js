const db = require("./database");
const alterarPessoa = require("../../src/services/alterarPessoa");
const logger = require("../../src/services/logger");
const { PessoaModel } = require("../../src/database/pessoa");

jest.mock("../../src/services/logger", () => {
  return { info: jest.fn(), error: jest.fn() };
});

beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());

describe("Atualiza pessoa no banco de dados", () => {
  it("com sucesso", async () => {
    const novaPessoa = new PessoaModel({ pessoaId: "ABC", nome: "TESTE A" });
    await novaPessoa.save();
    await alterarPessoa({
      pessoaId: "ABC",
      nome: "TESTE B",
      idade: 30,
      meiaEntrada: false,
    });
    expect(logger.info).toHaveBeenCalled();
  });
  it("com erro", () => {
    const fakeId = "DEF";
    expect(alterarPessoa({ pessoaId: fakeId })).rejects.toThrowError(
      `Pessoa "${fakeId}" não encontrada`
    );
  });
});
