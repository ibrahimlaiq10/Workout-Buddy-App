const workoutModel = require("../models/workout.schema");

const getWorkouts = async (req, res) => {
  const workouts = await workoutModel.find().select("_id title reps load");
  res.json(workouts);
};
const addWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    console.log(title, reps, load);
    const workouts = await workoutModel.create({ title, reps, load });
    res.json(workouts);
  } catch (er) {
    res.status(404).json({ error: er.message });
  }
};
const getWorkout = async (req, res) => {
  const id = req.params.id;
  const workout = await workoutModel.findById(id).select("_id title reps load");
  res.json(workout);
};
const updateWorkout = async (req, res) => {
  const id = req.params.id;
  const { title, reps, load } = req.body;

  const workout = await workoutModel.findByIdAndUpdate(id, {
    title,
    reps,
    load,
  });
  res.json(workout);
};
const deleteWorkout = async (req, res) => {
  const id = req.params.id;
  const workout = await workoutModel.findById(id);
  if (workout) {
    await workout.remove();
    res.json(workout);
  } else {
    res.status(404).send("workout not found");
  }
};

module.exports = {
  getWorkouts,
  addWorkout,
  getWorkout,
  updateWorkout,
  deleteWorkout,
};
