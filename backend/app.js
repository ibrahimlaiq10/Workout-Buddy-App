const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.json({ message: "Hi from express" });
});


module.exports = app;
