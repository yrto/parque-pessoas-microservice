const isAuthValid = require("../services/isAuthValid");
const deletarPessoaService = require("../services/deletarPessoa");
const { consultarPessoaPorIdService } = require("../services/pessoas");

// controller

const deletarPessoa = async (req, res, next) => {
  const valid = await isAuthValid(req.headers.authorization);
  if (valid) {
    const pessoaId = req.body.pessoaId;
    try {
      const pessoaRaw = await consultarPessoaPorIdService(pessoaId);
      if (pessoaRaw) {
        await deletarPessoaService(pessoaId);
        res.status(200).send(req.body);
      } else res.status(404).send("Not found!");
    } catch (err) {
      next(err);
    }
  } else res.status(403).send("Not ok!");
};

// export

module.exports = { deletarPessoa };
