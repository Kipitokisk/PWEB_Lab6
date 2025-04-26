import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ExerciseList from "./components/ExerciseList"; // Import ExerciseList
import Exercise from "./components/Exercise"; // Keep the Exercise component if needed elsewhere

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [currentPage, setCurrentPage] = useState("home");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [exercises, setExercises] = useState([
    {
      id: 1,
      name: "Push-up",
      description: "A bodyweight exercise to build chest strength.",
      sets: 3,
      reps: 15,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1pa4ITVQ3ZKXTM807-Juor1IP9kv5DwmJw&s"
    },
    {
      id: 2,
      name: "Squat",
      description: "A leg exercise that strengthens thighs, hips, and buttocks.",
      sets: 4,
      reps: 20,
      image: "/api/placeholder/400/320"
    }
  ]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const addExercise = () => {
    const newExercise = {
      id: exercises.length + 1,
      name: "Lunges",
      description: "A lower body exercise that targets the thighs, glutes, and hips.",
      sets: 3,
      reps: 12,
      image: "/api/placeholder/400/320"
    };
    setExercises([...exercises, newExercise]);
  };

  const addToFavorites = (exercise) => {
    const isAlreadyFavorite = favorites.some(fav => fav.id === exercise.id);
    
    if (isAlreadyFavorite) {
      setFavorites(favorites.filter(fav => fav.id !== exercise.id));
    } else {
      setFavorites([...favorites, exercise]);
    }
  };

  const isExerciseFavorite = (exerciseId) => {
    return favorites.some(fav => fav.id === exerciseId);
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <Header toggleTheme={toggleTheme} theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === "home" ? (
        <>
          <div className="text-center py-6">
            <button onClick={addExercise} className="mt-4 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add New Exercise
            </button>
          </div>
          {/* Use ExerciseList here */}
          <div className="space-y-6 p-4">
            <ExerciseList exercises={exercises} addToFavorites={addToFavorites} isExerciseFavorite={isExerciseFavorite} />
          </div>
        </>
      ) : (
        <>
          <div className="text-center py-6">
            <h2 className="text-3xl font-bold">My Favorite Exercises</h2>
          </div>
          <div className="space-y-6 p-4">
            {favorites.length > 0 ? (
              favorites.map((exercise) => (
                <Exercise key={exercise.id} exercise={exercise} addToFavorites={addToFavorites} isFavorite={true} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-xl">You haven't added any favorite exercises yet.</p>
                <button onClick={() => setCurrentPage("home")} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Browse Exercises
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
