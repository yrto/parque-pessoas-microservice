const mongoose = require("mongoose");

const mongooseConnect = async (MONGO_DB) => {
  try {
    await mongoose.connect(MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = mongooseConnect;
