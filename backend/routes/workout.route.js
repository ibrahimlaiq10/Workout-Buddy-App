const workoutRoute = require("express").Router();

workoutRoute.get("/", (req, res) => {
  res.send("get workouts");
});
workoutRoute.post("/", (req, res) => {
    res.send("post workouts");
  });
  workoutRoute.get("/:id", (req, res) => {
    res.send("get workouts");
  });
  workoutRoute.delete("/:id", (req, res) => {
    res.send("get workouts");
  });
  workoutRoute.patch("/:id", (req, res) => {
    res.send("get workouts");
  });

module.exports = workoutRoute;
