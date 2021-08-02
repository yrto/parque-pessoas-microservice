// controller

const health = (req, res) => {
  res.status(200).send("OK");
};

// export

module.exports = { health };
