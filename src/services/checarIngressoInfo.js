// ingressos

const checarIngressoInfo = (pessoa) => {
  let ingressoInfo = {
    tipoIngresso: "Cheio",
    valorIngresso: 175,
  };
  if (pessoa.meiaEntrada === true)
    ingressoInfo = {
      tipoIngresso: "Meia",
      valorIngresso: 87.5,
    };
  if (pessoa.idade <= 12)
    ingressoInfo = {
      tipoIngresso: "Infantil",
      valorIngresso: 75,
    };
  return ingressoInfo;
};

// export

module.exports = checarIngressoInfo;
