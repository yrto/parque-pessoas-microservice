const { AUTH_URL } = require("../config");
const axios = require("axios");
const logger = require("../services/logger");

// auth

const isAuthValidMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token !== undefined) {
    try {
      const res = await axios.post(`${AUTH_URL}/login/authorize`, { token });
      if (res.data.role === "peasant") {
        next();
      }
    } catch (err) {
      logger.error(err.message);
      res.status(403).send("Auth not ok!");
    }
  } else res.status(403).send("Forbidden!");
};

// export

module.exports = isAuthValidMiddleware;
