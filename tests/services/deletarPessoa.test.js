const db = require("./database");
const deletaPessoa = require("../../src/services/deletarPessoa");
const logger = require("../../src/services/logger");
const { PessoaModel } = require("../../src/database/pessoa");

jest.mock("../../src/services/logger", () => {
  return { info: jest.fn(), error: jest.fn() };
});

beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());

describe("Deleta pessoas do banco de dados", () => {
  it("com sucesso", async () => {
    const novaPessoa = new PessoaModel({ pessoaId: "ABC" });
    await novaPessoa.save();
    await deletaPessoa(novaPessoa.pessoaId);
    expect(logger.info).toHaveBeenCalled();
  });
  it("com erro", async () => {
    await deletaPessoa("DEF");
    expect(logger.error).toHaveBeenCalled();
  });
});
