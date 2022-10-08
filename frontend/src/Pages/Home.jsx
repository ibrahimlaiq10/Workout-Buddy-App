import { useState, useEffect } from "react";
import axios from "axios";
import WorkoutDetails from "../components/WorkoutDetails";

function Home() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const res = await axios.get("http://localhost:4500/api/workout/");
        const data = res.data;
        setWorkouts(data);

      } catch (e) {
        console.log(e.message);
      }
    };
    getWorkouts();
  }, []);

  return (
    <div className="home">
    <div className="workouts">
      {workouts && workouts.map(workout => (
        <WorkoutDetails workout={workout} key={workout._id} />
      ))}
    </div>
  </div>
  );
}

export default Home;
