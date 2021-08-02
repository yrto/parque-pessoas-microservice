const express = require("express");
const routes = require("./routes");
const mongooseConnect = require("./database");
const MONGO_URL = require("./config");

// config

const server = express();
const port = process.env.PORT || 3000;

// middleware

server.use(express.json());

// use routes from "/routes"

server.use("/", routes);

// listen

mongooseConnect(MONGO_URL);

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
