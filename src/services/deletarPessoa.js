const logger = require("./logger");
const { PessoaModel } = require("../database/pessoa");

// delete

async function deletarPessoaService(pessoaId) {
  try {
    await PessoaModel.deleteOne({ pessoaId: pessoaId });
    logger.info(`Pessoa "${pessoaId}" deletada`);
  } catch (err) {
    throw new Error(err);
  }
}

// export

module.exports = deletarPessoaService;
