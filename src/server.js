const express = require("express");
const eta = require("eta");
const routes = require("./routes");
const mongooseConnect = require("./database");
const logger = require("./services/logger");
const { MONGO_DB } = require("./config");
const logPathMiddleware = require("./middleware/logPath");
const errorTreatmentMiddleware = require("./middleware/errorTreatment");

// set up

const server = express();

// using middlewares & routes

server.engine("eta", eta.renderFile); // eta view engine
server.set("view engine", "eta"); // eta view engine
server.set("views", "./views"); // eta view engine

server.use(express.static("public"));
server.use(express.json());
server.use(logPathMiddleware);

server.get("/eta", function (req, res) {
  res.render("template", {
    title: "Eta",
    favorite: "Eta",
    name: "Ben",
    reasons: ["fast", "lightweight", "simple"],
  });
});

server.use("/v1/", routes);
server.use(errorTreatmentMiddleware);

// listen

mongooseConnect(MONGO_DB);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  logger.info(`Example app listening at http://localhost:${port}`);
});
