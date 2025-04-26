import React, { useState } from "react";

function AddExerciseForm({ addExercise }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !sets || !reps || !image) {
      alert("Please fill in all fields.");
      return;
    }

    const newExercise = {
      id: Date.now(),
      name,
      description,
      sets: parseInt(sets, 10),
      reps: parseInt(reps, 10),
      image,
    };

    addExercise(newExercise);
    setName("");
    setDescription("");
    setSets("");
    setReps("");
    setImage("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold mb-6">Add New Exercise</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Exercise Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter exercise name"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter exercise description"
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="sets" className="block text-sm font-medium text-gray-700">
              Sets
            </label>
            <input
              id="sets"
              type="number"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Number of sets"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="reps" className="block text-sm font-medium text-gray-700">
              Reps
            </label>
            <input
              id="reps"
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Number of reps"
            />
          </div>
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            id="image"
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter image URL"
          />
        </div>

        <button type="submit" className="w-full mt-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Add Exercise
        </button>
      </form>
    </div>
  );
}

export default AddExerciseForm;
