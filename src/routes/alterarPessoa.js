const express = require("express");
const router = express.Router();

// import controller

const { alterarPessoa } = require("../controllers/alterarPessoa");

// route handling

router.put("/", alterarPessoa);

// export

module.exports = router;