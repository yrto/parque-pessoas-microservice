const mongoose = require("mongoose");

// schema

const PessoaSchema = mongoose.Schema({
  pessoaId: String,
  nome: String,
  idade: Number,
  meiaEntrada: Boolean,
});

// model

const PessoaModel = mongoose.model("Pessoa", PessoaSchema);

// export

module.exports = { PessoaSchema, PessoaModel };
