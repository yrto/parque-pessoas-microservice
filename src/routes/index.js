const express = require("express");
const router = express.Router();

// import routes

const healthRoute = require("./health");

// "/" route

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// use imported routes

router.use("/health", healthRoute);

// export

module.exports = router;
