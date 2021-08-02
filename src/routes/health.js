const express = require("express");
const router = express.Router();

// import controller

const health = require("../controllers/health");

// route handling

router.get("/", (req, res) => {
  res.status(200).send("OK");
});

// export

module.exports = router;
