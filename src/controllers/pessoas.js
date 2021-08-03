const {
  consultarTodasAsPessoasService,
  consultarPessoaPorIdService,
} = require("../services/pessoas");

// controllers

const consultarTodasAsPessoas = async (req, res) => {
  const pessoasRaw = await consultarTodasAsPessoasService();
  const pessoasParsed = pessoasRaw.map((pessoa) => ({
    pessoaId: pessoa.pessoaId,
    nome: pessoa.nome,
  }));
  res.status(200).send(pessoasParsed);
};

const consultarPessoaPorId = async (req, res, next) => {
  const reqId = req.params.pessoaId;
  try {
    const pessoaRaw = await consultarPessoaPorIdService(reqId);
    if (pessoaRaw) {
      const pessoaParsed = {
        pessoaId: pessoaRaw.pessoaId,
        nome: pessoaRaw.nome,
      };
      res.status(200).send(pessoaParsed);
    } else res.status(404).send("Not found");
  } catch (err) {
    next(err);
  }
};

// export

module.exports = { consultarTodasAsPessoas, consultarPessoaPorId };
