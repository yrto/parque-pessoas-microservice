const { cadastrarPessoaService } = require("../services/cadastrarPessoa");
const { AUTH_URL } = require("../config");
const axios = require("axios");

// auth

const isAuthValid = async (token) => {
  //
  const res = await axios.post(`${AUTH_URL}/login/authorize`, { token });
  return res.data ? true : false;
};

// controller

const cadastrarPessoa = async (req, res) => {
  const valid = await isAuthValid(req.headers.authorization);
  if (valid) {
    // await cadastrarPessoaService(req.body);
    res.status(201).send(req.headers);
  } else res.status(403).send("Not ok!");
};

// export

module.exports = { cadastrarPessoa };
