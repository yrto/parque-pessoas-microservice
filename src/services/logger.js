const winston = require("winston");

// logger setup

const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console({
      format: winston.format.cli(),
    }),
  ],
});

// export

module.exports = logger;
