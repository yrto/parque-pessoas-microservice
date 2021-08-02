require("dotenv").config();

const { MONGO_URL_ATLAS, MONGO_URL_LOCALHOST } = process.env;

const MONGO_URL = MONGO_URL_ATLAS;

module.exports = MONGO_URL;
