import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";


function Exercise({ exercise, addToFavorites, isFavorite, removeExercise, theme}) {
  return (
    <div className={`w-full max-w-md mx-auto p-4 sm:p-6 rounded-lg shadow-lg transition ${theme === "dark" ? "bg-gradient-to-r from-[#3016c1] to-[#2b134f]" : "bg-gradient-to-r from-[#3016c1] to-[#3B4EA0]"} text-white`}>
      <div className="flex justify-between items-start">
        <h2 className="text-4xl font-bold text-white uppercase">{exercise.name}</h2>
        <button
        onClick={() => removeExercise(exercise.id)}
        className={"text-white font-bold py-2 px-4 rounded bg-gray-200 hover:bg-gray-300 text-black"}
      >
        <FaRegTrashAlt className="text-black"/>
      </button>
      </div>
      <p className="py-3 text-white">
        <strong>Targets:</strong> {exercise.targets && exercise.targets.length > 0 
          ? exercise.targets.join(", ") 
          : "None specified"}
      </p>
      <div className="flex justify-start gap-2 text-black mt-2">
        <p className="bg-white rounded-full px-3 py-2">
          <strong>{exercise.sets} SETS</strong>
        </p>
        <p className="bg-white rounded-full px-3 py-2">
        <strong>{exercise.reps} REPS</strong>
        </p>
        <p className="bg-white rounded-full px-3 py-2">
        <strong>{exercise.difficulty} Difficulty</strong>
        </p>
      </div>
      {exercise.image && (
        <img
          src={exercise.image}
          alt={exercise.name}
          className="mt-4 w-full h-60 rounded-lg"
        />
      )}
      <button
          onClick={() => addToFavorites(exercise)}
          className={`px-3 py-1 mt-3 rounded-full ${
            isFavorite ? "bg-red-500 text-white" : "bg-gray-200 hover:bg-gray-300 text-black"
          }`}
        >
          <FaHeart />
        </button>
    </div>
  );
}

export default Exercise;