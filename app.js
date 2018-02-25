const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
var routes=require('./routes/route.js');
if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "jade")
  .engine("html", require("jade").renderFile)
  .get("/", routes.city)
  .get("/:city", routes.city)
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
