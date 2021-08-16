const isAuthValid = require("../services/isAuthValid");
const alterarPessoaService = require("../services/alterarPessoa");
const { consultarPessoaPorIdService } = require("../services/pessoas");

// controller

const alterarPessoa = async (req, res, next) => {
  const valid = await isAuthValid(req.headers.authorization);
  if (valid) {
    try {
      const pessoaRaw = await consultarPessoaPorIdService(req.body.pessoaId);
      if (pessoaRaw) {
        await alterarPessoaService(req.body);
        res.status(200).send(req.body);
      } else res.status(404).send("Not found!");
    } catch (err) {
      next(err);
    }
  } else res.status(403).send("Not ok!");
};

// export

module.exports = alterarPessoa;
