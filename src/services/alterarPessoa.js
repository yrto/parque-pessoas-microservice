const { PessoaModel } = require("../database/pessoa");

// update

async function alterarNomePessoaService(pessoaId, novoNomeDaPessoa) {
  try {
    await PessoaModel.updateOne(
      { pessoaId: pessoaId },
      { nome: novoNomeDaPessoa }
    );
  } catch (err) {
    throw new Error(err);
  }
}

// export

module.exports = { alterarNomePessoaService };
