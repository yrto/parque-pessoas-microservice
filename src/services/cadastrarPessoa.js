const { PessoaModel } = require("../database/pessoa");
const { nanoid } = require("nanoid");
const logger = require("./logger");
const { INGRESSOS_URL, AUTH_TOKEN } = require("../config");
const axios = require("axios");

// auth headers

const authHeaders = {
  Authorization: AUTH_TOKEN,
};

// ingressos

const checarIngressoInfo = (pessoa) => {
  let ingressoInfo = {
    tipoIngresso: "Cheio",
    valorIngresso: 175,
  };
  if (pessoa.meiaEntrada === true)
    ingresso = {
      tipoIngresso: "Meia",
      valorIngresso: 87.5,
    };
  if (pessoa.idade <= 12)
    ingresso = {
      tipoIngresso: "Infantil",
      valorIngresso: 75,
    };
  return ingressoInfo;
};

// create

async function cadastrarPessoaService(pessoa) {
  try {
    // save

    const novaPessoa = new PessoaModel({
      pessoaId: nanoid(10),
      ...pessoa,
    });
    await novaPessoa.save();

    logger.info("Pessoa salva com sucesso!");

    // pessoa

    const { tipoIngresso, valorIngresso } = checarIngressoInfo(novaPessoa);

    const apiIngressosBody = {
      tipoIngresso: tipoIngresso,
      valor: valorIngresso,
      creditoInicial: 0,
      valido: true,
      id: novaPessoa.pessoaId,
    };

    // registrar na API de ingressos

    // const res = await axios.post(INGRESSOS_URL, apiIngressosBody, {
    //   headers: authHeaders,
    // });

    // logger.info(res);
    logger.info(apiIngressosBody);

    // errors
  } catch (err) {
    throw new Error(err);
  }
}

// export

module.exports = cadastrarPessoaService;
