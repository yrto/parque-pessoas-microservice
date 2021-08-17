const express = require("express");
const router = express.Router();

// import routes

const healthRoute = require("./health");
const isAuthValidMiddleware = require("../middleware/isAuthValid");
const pessoas = require("./pessoas");
const cadastrarPessoaRoute = require("./cadastrarPessoa");
const alterarPessoaRoute = require("./alterarPessoa");
const deletarPessoaRoute = require("./deletarPessoa");

// use imported routes

router.use("/health", healthRoute);
router.use(isAuthValidMiddleware);
router.use("/pessoas", pessoas);
router.use("/cadastrar-pessoa", cadastrarPessoaRoute);
router.use("/alterar-pessoa", alterarPessoaRoute);
router.use("/deletar-pessoa", deletarPessoaRoute);

// export

module.exports = router;
