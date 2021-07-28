const express = require("express");
const routes = require("./routes");

// config

const server = express();
const port = 3000;

// use routes from "/routes"

server.use("/", routes);

// listen

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
