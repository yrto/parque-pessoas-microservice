const { ValidationError } = require("express-validation");
const logger = require("../services/logger");

const errorTreatmentMiddleware = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(err.statusCode).json(err);
    logger.error(err.message);
    return;
  }
  logger.error(err.message);
  res.status(500).send("Not ok!");
};

module.exports = errorTreatmentMiddleware;
