const express = require("express");
const router = express.Router();

// import controller

const { deletarPessoa } = require("../controllers/deletarPessoa");

// route handling

router.delete("/", deletarPessoa);

// export

module.exports = router;
