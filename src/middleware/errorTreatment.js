const logger = require("../services/logger");

const errorTreatmentMiddleware = (error, req, res, next) => {
  logger.error(error);
  res.status(500).send("Not ok!");
};

module.exports = errorTreatmentMiddleware;
