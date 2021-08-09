require("dotenv").config();

const {
  MONGO_DB,
  INGRESSOS_URL,
  AUTH_URL,
  AUTH_USER,
  AUTH_PASS,
  AUTH_TOKEN,
} = process.env;

module.exports = {
  MONGO_DB,
  INGRESSOS_URL,
  AUTH_URL,
  AUTH_USER,
  AUTH_PASS,
  AUTH_TOKEN,
};
