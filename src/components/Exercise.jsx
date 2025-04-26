import React from "react";
import { FaHeart } from "react-icons/fa";

function Exercise({ exercise, addToFavorites, isFavorite, removeExercise }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-bold">{exercise.name}</h2>
        <button
          onClick={() => addToFavorites(exercise)}
          className={`px-3 py-1 rounded-full ${
            isFavorite ? "bg-red-500 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <FaHeart />
        </button>
      </div>
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
      <button
        onClick={() => removeExercise(exercise.id)}
        className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Remove Exercise
      </button>
    </div>
  );
}

export default Exercise;
