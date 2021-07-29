const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, age, height } = req.body;

  res.status(201).send({ name, age, height });
});

// export

module.exports = router;
