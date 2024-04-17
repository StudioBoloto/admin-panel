const mainRouter = require("express").Router();
const fs = require("fs").promises;

mainRouter.get("/", (req, res) => {
  fs.readFile("./public/index.html", "utf-8").then((data) => {
    res.setHeader("Content-Type", "text/html").send(data);
  });
});

module.exports = mainRouter;
