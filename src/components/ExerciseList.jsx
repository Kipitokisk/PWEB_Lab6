import React from "react";
import Exercise from "./Exercise";
function ExerciseList({ exercises, addToFavorites, isExerciseFavorite }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {exercises.map((exercise) => (
        <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] mx-auto">
          <Exercise
            key={exercise.id}
            exercise={exercise}
            addToFavorites={addToFavorites}
            isFavorite={isExerciseFavorite(exercise.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default ExerciseList;
