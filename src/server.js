const express = require("express");
const routes = require("./routes");
const mongooseConnect = require("./database");
const { MONGO_DB } = require("./config");
const logger = require("./services/logger");
const logPathMiddleware = require("./middleware/logPath");
const errorTreatmentMiddleware = require("./middleware/errorTreatment");

// config

const server = express();
const port = process.env.PORT || 3000;

// middlewares

server.use(express.json());
server.use(logPathMiddleware);

// use routes from "/routes"

server.use("/", routes);
server.use(errorTreatmentMiddleware);

// listen

mongooseConnect(MONGO_DB);

server.listen(port, () => {
  logger.info(`Example app listening at http://localhost:${port}`);
});
