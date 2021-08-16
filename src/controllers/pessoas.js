const isAuthValid = require("../services/isAuthValid");
const {
  consultarTodasAsPessoasService,
  consultarPessoaPorIdService,
} = require("../services/pessoas");

// controllers

const consultarTodasAsPessoas = async (req, res) => {
  //
  const valid = await isAuthValid(req.headers.authorization);
  if (valid) {
    const pessoasRaw = await consultarTodasAsPessoasService();
    const pessoasParsed = pessoasRaw.map((pessoa) => ({
      pessoaId: pessoa.pessoaId,
      nome: pessoa.nome,
      idade: pessoa.idade,
      meiaEntrada: pessoa.meiaEntrada,
    }));
    res.status(200).send(pessoasParsed);
  } else res.status(403).send("Not ok!");
};

const consultarPessoaPorId = async (req, res, next) => {
  const valid = await isAuthValid(req.headers.authorization);
  if (valid) {
    const reqId = req.params.pessoaId;
    try {
      const pessoaRaw = await consultarPessoaPorIdService(reqId);
      if (pessoaRaw) {
        const pessoaParsed = {
          pessoaId: pessoaRaw.pessoaId,
          nome: pessoaRaw.nome,
          idade: pessoaRaw.idade,
          meiaEntrada: pessoaRaw.meiaEntrada,
        };
        res.status(200).send(pessoaParsed);
      } else res.status(404).send("Not found!");
    } catch (err) {
      next(err);
    }
  } else res.status(403).send("Not ok!");
};

// export

module.exports = { consultarTodasAsPessoas, consultarPessoaPorId };
