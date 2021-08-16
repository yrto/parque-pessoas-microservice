const express = require("express");
const router = express.Router();
const { validate, Joi } = require("express-validation");

// validation

const validarAlteracao = {
  body: Joi.object({
    pessoaId: Joi.string().required(),
    nome: Joi.string().required(),
    idade: Joi.number().required(),
    meiaEntrada: Joi.boolean().required(),
  }),
};

// import controller

const alterarPessoa = require("../controllers/alterarPessoa");

// route handling

router.put("/", validate(validarAlteracao, {}, {}), alterarPessoa);

// export

module.exports = router;
