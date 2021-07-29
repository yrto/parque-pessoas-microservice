const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({ name: "teste", age: 20, height: 178 });
});

// export

module.exports = router;
