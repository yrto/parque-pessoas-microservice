const { PessoaModel } = require("../database/pessoa");

// read

async function consultarTodasAsPessoasService() {
  try {
    const todasAsPessoas = await PessoaModel.find({});
    return todasAsPessoas;
  } catch (err) {
    throw new Error(err);
  }
}

async function consultarPessoaPorIdService(pessoaId) {
  const pessoa = await PessoaModel.findOne({ pessoaId });
  return pessoa;
}

// export

module.exports = {
  consultarTodasAsPessoasService,
  consultarPessoaPorIdService,
};
