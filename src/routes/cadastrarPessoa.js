const express = require("express");
const router = express.Router();
const { validate, Joi } = require("express-validation");

// validation

const validarDadosCadastro = {
  body: Joi.object({
    nome: Joi.string().required(),
    idade: Joi.number().required(),
    meiaEntrada: Joi.boolean().required(),
  }),
};

// import controller

const { cadastrarPessoa } = require("../controllers/cadastrarPessoa");

// route handling

router.post("/", validate(validarDadosCadastro, {}, {}), cadastrarPessoa);

// export

module.exports = router;
