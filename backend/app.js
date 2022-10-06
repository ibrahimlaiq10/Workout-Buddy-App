const express = require("express");
const workoutRoute = require("./routes/workout.route")

const app = express();

app.use(express.json());
app.use("/api/workout",workoutRoute)
app.use("/", (req, res) => {
  res.json({ message: "Hi from express" });
});


module.exports = app;
