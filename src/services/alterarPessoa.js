const logger = require("./logger");
const { PessoaModel } = require("../database/pessoa");

// update

async function alterarPessoaService(pessoa) {
  try {
    const res = await PessoaModel.updateOne(
      { pessoaId: pessoa.pessoaId },
      {
        nome: pessoa.nome,
        idade: pessoa.idade,
        meiaEntrada: pessoa.meiaEntrada,
      }
    );
    if (res.nModified === 0) {
      throw new Error(`Pessoa "${pessoa.pessoaId}" não encontrada`);
    }
    logger.info(`Pessoa "${pessoa.pessoaId}" atualizada`);
  } catch (err) {
    throw new Error(err);
  }
}

// export

module.exports = alterarPessoaService;
