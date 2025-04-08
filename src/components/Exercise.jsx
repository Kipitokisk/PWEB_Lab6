import React from "react";

function Exercise({ exercise }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold">{exercise.name}</h2>
      <p>{exercise.description}</p>
      <p>
        <strong>Sets:</strong> {exercise.sets}
      </p>
      <p>
        <strong>Reps:</strong> {exercise.reps}
      </p>
      {exercise.image && (
        <img
          src={exercise.image}
          alt={exercise.name}
          className="mt-4 w-full rounded-lg"
        />
      )}
    </div>
  );
}

export default Exercise;
