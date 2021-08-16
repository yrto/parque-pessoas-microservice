const { PessoaModel } = require("../database/pessoa");

// update

async function alterarPessoaService(pessoa) {
  try {
    await PessoaModel.updateOne(
      { pessoaId: pessoa.pessoaId },
      {
        nome: pessoa.nome,
        idade: pessoa.idade,
        meiaEntrada: pessoa.meiaEntrada,
      }
    );
  } catch (err) {
    throw new Error(err);
  }
}

// export

module.exports = alterarPessoaService;
