const cadastrarPessoaService = require("../services/cadastrarPessoa");

// controller

const cadastrarPessoa = async (req, res) => {
  await cadastrarPessoaService(req.body);
  res.status(200).send([req.headers, req.body]);
};

// export

module.exports = { cadastrarPessoa };
