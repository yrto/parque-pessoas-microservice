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
router.use("/pessoas", pessoasRoute);

// main "/" route

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// export

module.exports = router;
