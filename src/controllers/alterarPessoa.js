const { alterarNomePessoaService } = require("../services/alterarPessoa");

// controller

const alterarPessoa = async (req, res) => {
  await alterarNomePessoaService(req.body.pessoaId, req.body.nome);
  res.status(200).send(req.body);
};

// export

module.exports = { alterarPessoa };
