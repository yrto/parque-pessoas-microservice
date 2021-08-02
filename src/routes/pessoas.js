const express = require("express");
const router = express.Router();

// import controllers

const {
  consultarTodasAsPessoas,
  consultarPessoaPorId,
} = require("../controllers/pessoas");

// routes

router.get("/", consultarTodasAsPessoas);
router.get("/:pessoaId", consultarPessoaPorId);

// export

module.exports = router;
