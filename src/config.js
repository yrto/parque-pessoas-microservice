require("dotenv").config();

const { MONGO_DB } = process.env;

module.exports = MONGO_DB;
