const express = require("express");
const routes = require("./routes");
const mongooseConnect = require("./database");
const MONGO_URL = require("./config");
const logger = require("./services/logger");
const logPathMiddleware = require("./middleware/logPath");

// config

const server = express();
const port = process.env.PORT || 3000;

// middlewares

// const errorTreatmentMiddleware = (error, req, res, next) => {
//   logger.error(error);
//   res.status(500).send("Not ok!");
// };

server.use(express.json());
server.use(logPathMiddleware);
// server.use(errorTreatmentMiddleware);

// use routes from "/routes"

server.use("/", routes);

// listen

mongooseConnect(MONGO_URL);

server.listen(port, () => {
  logger.info(`Example app listening at http://localhost:${port}`);
});
