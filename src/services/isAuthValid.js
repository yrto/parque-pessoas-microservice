const { AUTH_URL } = require("../config");
const axios = require("axios");
const logger = require("../services/logger");

// auth

const isAuthValid = async (token) => {
  try {
    const res = await axios.post(`${AUTH_URL}/login/authorize`, { token });
    return res.data.role === "peasant";
  } catch (err) {
    logger.error(err.message);
  }
};

// export

module.exports = isAuthValid;
