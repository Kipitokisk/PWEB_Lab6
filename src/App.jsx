// src/App.jsx
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Exercise from "./components/Exercise";
import ExerciseList from "./components/ExerciseList";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [exercises, setExercise] = useState([{
    name: "Push-up",
    description: "A bodyweight exercise to build chest strength.",
    sets: 3,
    reps: 15,
    image: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
  },
  {
    name: "Squat",
    description: "A leg exercise that strengthens thighs, hips, and buttocks.",
    sets: 4,
    reps: 20,
    image: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
  }
]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }
    >
      <Header toggleTheme={toggleTheme} theme={theme} />
      <div className="space-y-4">
          {exercises.map((exercise, index) => (
            <Exercise key={index} exercise={exercise} />
          ))}
        </div>
    </div>
  );
}

export default App;
