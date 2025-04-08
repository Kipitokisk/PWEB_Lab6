import React from "react";

function ExerciseList({ exercises }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {exercises.map((exercise) => (
        <div key={exercise.id} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">{exercise.name}</h3>
          <p>{exercise.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ExerciseList;
