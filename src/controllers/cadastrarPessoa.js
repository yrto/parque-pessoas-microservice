const isAuthValid = require("../services/isAuthValid");
const cadastrarPessoaService = require("../services/cadastrarPessoa");

// controller

const cadastrarPessoa = async (req, res) => {
  const valid = await isAuthValid(req.headers.authorization);
  if (valid) {
    await cadastrarPessoaService(req.body);
    res.status(200).send([req.headers, req.body]);
  } else res.status(403).send("Not ok!");
};

// export

module.exports = { cadastrarPessoa };
