const { AUTH_URL } = require("../config");
const axios = require("axios");
const logger = require("../services/logger");

// auth

const isAuthValid = async (token) => {
  try {
    const url = `${AUTH_URL}/login/authorize`;
    const res = await axios.post(url, { token });
    return res.data.role === "peasant";
  } catch (err) {
    logger.error(err.message);
    return false;
  }
};

// export

module.exports = isAuthValid;
