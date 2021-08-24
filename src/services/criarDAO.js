const { PessoaModel } = require("../database/pessoa");
const { nanoid } = require("nanoid");

// criarDAO

const criarDAO = (data) =>
  new PessoaModel({
    pessoaId: nanoid(10),
    ...data,
  });

// export

module.exports = criarDAO;
