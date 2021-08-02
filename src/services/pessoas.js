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
  try {
    const pessoaEncontrada = await PessoaModel.find({ pessoaId: pessoaId });
    return pessoaEncontrada;
  } catch (err) {
    throw new Error(err);
  }
}

// export

module.exports = {
  consultarTodasAsPessoasService,
  consultarPessoaPorIdService,
};
