//Core Module
const path = require("path");

// External Module
const express = require("express");

//Local module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");
const errorController = require("./controllers/errors");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(errorController.pageNotFound);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
