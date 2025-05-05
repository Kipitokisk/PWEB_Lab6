import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ExerciseList from "./components/ExerciseList";
import AddExerciseForm from "./components/AddExerciseForm"; 
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [currentPage, setCurrentPage] = useState("home");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [exercises, setExercises] = useState(
    JSON.parse(localStorage.getItem("exercises")) || [
      {
        id: 1,
        name: "Push-up",
        targets: ["Chest", "Triceps", "Shoulders"],
        difficulty: "Medium",
        sets: 3,
        reps: 15,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1pa4ITVQ3ZKXTM807-Juor1IP9kv5DwmJw&s"
      },
      {
        id: 2,
        name: "Squat",
        targets: ["Quadriceps", "Glutes", "Hamstrings"],
        difficulty: "Easy",
        sets: 4,
        reps: 20,
        image: "https://as2.ftcdn.net/v2/jpg/03/44/75/77/1000_F_344757785_UYxWLYhTqI1igC5T5d47d1uzVahVRh4m.jpg"
      }
    ]
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("exercises", JSON.stringify(exercises));
  }, [exercises]);

  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const addExercise = (newExercise) => {
    setExercises((prevExercises) => [...prevExercises, newExercise]);
    setCurrentPage("home");
  };

  const removeExercise = (exerciseId) => {
    setExercises(exercises.filter((exercise) => exercise.id !== exerciseId));
    setFavorites(favorites.filter((exercise) => exercise.id !== exercise.id));
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
    <div className={`min-h-screen ${theme === "dark" ? "bg-gradient-to-b from-[#07031F] via-[#07031F] to-[#0F073D]" : "bg-[#f5f5f7]"}`}>
      <Header toggleTheme={toggleTheme} theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <Routes>
  <Route path="/" element={
    <>
      <div className="text-center py-6">
        <button
          onClick={() => navigate("/add")}
          className={`mt-4 mx-auto ${theme === "dark" ? "bg-gradient-to-r from-[#3016c1] to-[#2b134f] hover:from-[#241097] hover:to-[#1e0e3d]" : "bg-gradient-to-r from-[#3016c1] to-[#3B4EA0] hover:from-[#250fa3] hover:to-[#2e3d88]"}  text-white font-bold py-2 px-4 rounded`}
        >
          Add New Exercise
        </button>
      </div>

      <div className="space-y-6 p-4">
        <ExerciseList
          exercises={exercises}
          removeExercise={removeExercise}
          addToFavorites={addToFavorites}
          isExerciseFavorite={isExerciseFavorite}
          theme={theme}
        />
      </div>
    </>
  } />

  <Route path="/add" element={
    <AddExerciseForm addExercise={addExercise} />
  } />

  <Route path="/favorites" element={
    <>
      <div className="text-center py-6">
        <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>My Favorite Exercises</h2>
      </div>
      <div className="space-y-6 p-4">
        {favorites.length > 0 ? (
          <ExerciseList
            exercises={favorites}
            removeExercise={removeExercise}
            addToFavorites={addToFavorites}
            isExerciseFavorite={() => true}
            theme={theme}
          />
        ) : (
          <div className="text-center py-12">
            <p className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>You haven't added any favorite exercises yet.</p>
            <button
              onClick={() => navigate("/")}
              className={`mt-4 ${theme === "dark" ? "bg-gradient-to-r from-[#3016c1] to-[#2b134f] hover:from-[#241097] hover:to-[#1e0e3d]" : "bg-gradient-to-r from-[#3016c1] to-[#3B4EA0] hover:from-[#250fa3] hover:to-[#2e3d88]"} text-white font-bold py-2 px-4 rounded`}
            >
              Browse Exercises
            </button>
          </div>
        )}
      </div>
    </>
  } />
</Routes>
    </div>
  );
}

export default App;
