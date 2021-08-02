const { PessoaModel } = require("../database/pessoa");
const { nanoid } = require("nanoid");

// create

async function cadastrarPessoaService(pessoa) {
  try {
    const novaPessoa = new PessoaModel({
      pessoaId: nanoid(10),
      ...pessoa,
    });
    await novaPessoa.save();
  } catch (err) {
    throw new Error(err);
  }
}

// export

module.exports = { cadastrarPessoaService };
