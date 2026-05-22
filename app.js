// Core Module
const path = require("path");

// External Module
const express = require("express");

// Local Modules
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const errorController = require("./controllers/errors");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(storeRouter);
app.use("/host", hostRouter);

app.use(errorController.pageNotFound);

// Export app for Vercel serverless and local use
module.exports = app;

// Start server only when run directly (not imported by Vercel)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
