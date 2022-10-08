const express = require("express");
const cors = require("cors")
const workoutRoute = require("./routes/workout.route")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/workout",workoutRoute)
app.use("/", (req, res) => {
  res.json({ message: "Hi from express" });
});


module.exports = app;
