const express = require("express");
const routes = require("./routes");
const mongooseConnect = require("./database");
const logger = require("./services/logger");
const { MONGO_DB } = require("./config");
const logPathMiddleware = require("./middleware/logPath");
const errorTreatmentMiddleware = require("./middleware/errorTreatment");

// set up

const server = express();

// using middlewares & routes

server.use(express.static("public"));
server.use(express.json());
server.use(logPathMiddleware);
server.use("/v1/", routes);
server.use(errorTreatmentMiddleware);

// listen

mongooseConnect(MONGO_DB);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  logger.info(`Example app listening at http://localhost:${port}`);
});
