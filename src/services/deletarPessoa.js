const { PessoaModel } = require("../database/pessoa");

// delete

async function deletarPessoaService(pessoaId) {
  try {
    await PessoaModel.deleteOne({ pessoaId: pessoaId });
  } catch (err) {
    throw new Error(err);
  }
}

// export

module.exports = { deletarPessoaService };
