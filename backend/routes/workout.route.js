const workoutRoute = require("express").Router();
const workoutController = require("../controllers/workout.controller");

workoutRoute.get("/", workoutController.getWorkouts);
workoutRoute.post("/", workoutController.addWorkout);
workoutRoute.get("/:id", workoutController.getWorkout);
workoutRoute.delete("/:id", workoutController.deleteWorkout);
workoutRoute.patch("/:id", workoutController.updateWorkout);

module.exports = workoutRoute;
