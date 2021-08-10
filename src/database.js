const mongoose = require("mongoose");
const logger = require("./services/logger");

const mongooseConnect = async (MONGO_DB) => {
  try {
    logger.info(`Connecting to ${MONGO_DB}`);
    await mongoose.connect(MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("Database connected");
  } catch (err) {
    logger.error(err.message);
  }
};

module.exports = mongooseConnect;
