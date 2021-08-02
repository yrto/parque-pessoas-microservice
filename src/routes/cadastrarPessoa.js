const express = require("express");
const router = express.Router();

// import controller

const { cadastrarPessoa } = require("../controllers/cadastrarPessoa");

// route handling

router.post("/", cadastrarPessoa);

// export

module.exports = router;
