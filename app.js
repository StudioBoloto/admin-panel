const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mainRoute = require("./routes/main.js");
const gamesRouter = require("./routes/games.js");
const cors = require("./middlewares/cors.js");

const app = express();
const PORT = 3000;

app.use(cors);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(mainRoute);
app.use(gamesRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
