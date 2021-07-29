const express = require("express");
const routes = require("./routes");

// config

const server = express();
const port = process.env.PORT || 3000;

// middleware

server.use(express.json());

// use routes from "/routes"

server.use("/", routes);

// listen

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
