const express = require("express");
const router = express.Router();

// import routes

const healthRoute = require("./health");
const cadastrarPessoaRoute = require("./cadastrarPessoa");
const alterarPessoaRoute = require("./alterarPessoa");
const pessoasRoute = require("./pessoas");

// use imported routes

router.use("/health", healthRoute);
router.use("/cadastrar-pessoa", cadastrarPessoaRoute);
router.use("/alterar-pessoa", alterarPessoaRoute);
router.use("/", pessoasRoute);

// export

module.exports = router;
