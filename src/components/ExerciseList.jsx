import React from "react";
import Exercise from "./Exercise";

function ExerciseList({ exercises, removeExercise, addToFavorites, isExerciseFavorite }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {exercises.map((exercise) => (
        <Exercise
          key={exercise.id}
          exercise={exercise}
          addToFavorites={addToFavorites}
          isFavorite={isExerciseFavorite(exercise.id)}
          removeExercise={removeExercise} // Pass removeExercise function here
        />
      ))}
    </div>
  );
}

export default ExerciseList;
