const express = require("express");
const router = express.Router();

// import controller

const health = require("../controllers/health");

// route handling

router.get("/", health);

// export

module.exports = router;
