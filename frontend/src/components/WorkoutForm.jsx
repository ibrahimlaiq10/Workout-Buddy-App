import { useState } from "react";
import axios from "axios";
function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState("");

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const body = {
      title,
      load,
      reps,
    };
    try {
      const res = await axios.post("http://localhost:4500/api/workout/", body);
      console.log(res.data);
      setTitle("");
      setLoad("");
      setReps("");
      setError("");
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <form onSubmit={handleOnSubmit} className="create">
      <h3>Add a new Workout</h3>

      <label>Exercise Title:</label>
      <input
        type="text"
        name="title"
        id="titel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Load (in Kg):</label>

      <input
        type="text"
        name="load"
        id="load"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
      />
      <label>Reps:</label>

      <input
        type="text"
        name="reps"
        id="reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <button type="submit">Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm;
