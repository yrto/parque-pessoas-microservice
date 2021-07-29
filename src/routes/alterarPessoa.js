const express = require("express");
const router = express.Router();

router.put("/", (req, res) => {
  const { name, age, height } = req.body;

  res.status(200).send({ name, age, height });
});

// export

module.exports = router;
