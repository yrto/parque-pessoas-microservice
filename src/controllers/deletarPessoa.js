const { deletarPessoaService } = require("../services/deletarPessoa");

// controller

const deletarPessoa = async (req, res) => {
  const pessoaId = req.body.pessoaId;
  await deletarPessoaService(pessoaId);
  res.status(200).send(req.body);
};

// export

module.exports = { deletarPessoa };
