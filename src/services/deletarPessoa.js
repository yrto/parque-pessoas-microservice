const logger = require("./logger");
const { PessoaModel } = require("../database/pessoa");

// delete

async function deletarPessoaService(pessoaId) {
  try {
    const res = await PessoaModel.deleteOne({ pessoaId: pessoaId });
    if (res.deletedCount === 0) {
      throw new Error(`Pessoa "${pessoaId}" não encontrada`);
    }
    logger.info(`Pessoa "${pessoaId}" deletada`);
  } catch (err) {
    logger.error(err);
  }
}

// export

module.exports = deletarPessoaService;
