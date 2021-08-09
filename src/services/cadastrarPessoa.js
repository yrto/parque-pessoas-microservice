const { PessoaModel } = require("../database/pessoa");
const { nanoid } = require("nanoid");
const logger = require("./logger");
const { INGRESSOS_URL, AUTH_TOKEN } = require("../config");
const axios = require("axios");

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

    // ingressos

    let ingresso = {
      tipoIngresso: "Cheio",
      valorIngresso: 175,
    };
    if (novaPessoa.meiaEntrada === true)
      ingresso = {
        tipoIngresso: "Meia",
        valorIngresso: 87.5,
      };
    if (novaPessoa.idade <= 12)
      ingresso = {
        tipoIngresso: "Infantil",
        valorIngresso: 75,
      };

    // pessoa

    const apiIngressosBody = {
      tipoIngresso: ingresso.tipoIngresso,
      valor: ingresso.valorIngresso,
      creditoInicial: 0,
      valido: true,
      id: novaPessoa.pessoaId,
    };

    // auth headers

    const headers = {
      Authorization: AUTH_TOKEN,
    };

    // API ingressos

    const res = await axios.post(INGRESSOS_URL, apiIngressosBody, {
      headers: headers,
    });

    logger.info(res);

    // errors
  } catch (err) {
    throw new Error(err);
  }
}

// export

module.exports = { cadastrarPessoaService };
