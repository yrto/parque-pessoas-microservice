const {
  consultarTodasAsPessoasService,
  consultarPessoaPorIdService,
} = require("../services/pessoas");

// controllers

const consultarTodasAsPessoas = async (req, res) => {
  const todasAsPessoas = await consultarTodasAsPessoasService();
  res.status(200).send(todasAsPessoas);
};

const consultarPessoaPorId = async (req, res) => {
  const pessoaEncontrada = await consultarPessoaPorIdService(
    req.params.pessoaId
  );
  res.status(200).send(pessoaEncontrada);
};

// export

module.exports = { consultarTodasAsPessoas, consultarPessoaPorId };
