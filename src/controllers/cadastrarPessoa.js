const { cadastrarPessoaService } = require("../services/cadastrarPessoa");

// controller

const cadastrarPessoa = async (req, res) => {
  await cadastrarPessoaService(req.body);
  res.status(201).send(req.body);
};

// export

module.exports = { cadastrarPessoa };
