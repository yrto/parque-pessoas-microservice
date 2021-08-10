const { cadastrarPessoaService } = require("../services/cadastrarPessoa");
const { AUTH_URL } = require("../config");
const axios = require("axios");
const logger = require("../services/logger");

// auth

const isAuthValid = async (token) => {
  try {
    const res = await axios.post(`${AUTH_URL}/login/authorize`, { token });
    return res.data.role === "peasant";
  } catch (err) {
    logger.error(err.message);
  }
};

// controller

const cadastrarPessoa = async (req, res) => {
  const valid = await isAuthValid(req.headers.authorization);
  if (valid) {
    // await cadastrarPessoaService(req.body);
    res.status(200).send([req.headers, req.body]);
  } else res.status(403).send("Not ok!");
};

// export

module.exports = { cadastrarPessoa };
