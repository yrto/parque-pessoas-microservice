const logger = require("./logger");
const { INGRESSOS_URL, AUTH_TOKEN } = require("../config");
const axios = require("axios");
const criarDAO = require("./criarDAO");
const checarIngressoInfo = require("./checarIngressoInfo");

// auth headers

const authHeaders = {
  Authorization: AUTH_TOKEN,
};

// create

async function cadastrarPessoaService(pessoa) {
  try {
    // instancia e salva pessoa no BD

    const novaPessoa = criarDAO(pessoa);
    await novaPessoa.save();
    logger.info("Pessoa salva com sucesso!");

    // pessoa

    const { tipoIngresso, valorIngresso } = checarIngressoInfo(novaPessoa);

    const apiIngressosBody = {
      tipoIngresso: tipoIngresso,
      valor: valorIngresso,
      creditoInicial: 0,
      id: novaPessoa.pessoaId,
    };

    // registrar na API de ingressos

    const res = await axios.post(INGRESSOS_URL, apiIngressosBody, {
      headers: authHeaders,
    });

    logger.info(res);
    logger.info(apiIngressosBody);

    // errors
  } catch (err) {
    throw new Error(err);
  }
}

// export

module.exports = cadastrarPessoaService;
