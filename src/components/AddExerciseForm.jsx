import React, { useState } from "react";

function AddExerciseForm({ addExercise }) {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [imageBase64, setImageBase64] = useState("");
  const [targets, setTargets] = useState([]);
  const [showTargetDropdown, setShowTargetDropdown] = useState(false);
  
  const muscleGroups = [
    "Chest", "Back", "Shoulders", "Biceps", "Triceps", 
    "Forearms", "Quadriceps", "Hamstrings", "Calves", 
    "Glutes", "Core", "Abs", "Obliques", "Traps", "Lats"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !sets || !reps || !imageBase64) {
      alert("Please fill in all required fields including image.");
      return;
    }
  
    const newExercise = {
      id: Date.now(),
      name,
      difficulty,
      sets: parseInt(sets, 10),
      reps: parseInt(reps, 10),
      targets: targets,
      image: imageBase64,
    };
  
    addExercise(newExercise);
    setName("");
    setDifficulty("Medium");
    setSets("");
    setReps("");
    setTargets([]);
    setImageBase64("");
  };

  const handleTargetSelect = (muscleGroup) => {
    if (targets.includes(muscleGroup)) {
      setTargets(targets.filter(target => target !== muscleGroup));
    } else {
      setTargets([...targets, muscleGroup]);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setImageBase64(base64);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-lg mt-4 sm:mt-8">
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
            required
          />
        </div>

        <div>
          <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">
            Difficulty
          </label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Target Muscle Groups
          </label>
          <div className="relative mt-1">
            <div 
              onClick={() => setShowTargetDropdown(!showTargetDropdown)}
              className="w-full p-2 border border-gray-300 rounded flex justify-between items-center cursor-pointer"
            >
              <div>
                {targets.length > 0 
                  ? targets.join(", ") 
                  : "Select muscle groups"
                }
              </div>
              <div>▼</div>
            </div>
            
            {showTargetDropdown && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
                {muscleGroups.map(muscle => (
                  <div 
                    key={muscle}
                    className={`p-2 cursor-pointer hover:bg-gray-100 ${
                      targets.includes(muscle) ? "bg-blue-100" : ""
                    }`}
                    onClick={() => handleTargetSelect(muscle)}
                  >
                    <input
                      type="checkbox"
                      checked={targets.includes(muscle)}
                      onChange={() => {}}
                      className="mr-2"
                    />
                    {muscle}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {targets.map(target => (
              <span 
                key={target} 
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center"
              >
                {target}
                <button 
                  type="button"
                  onClick={() => setTargets(targets.filter(t => t !== target))}
                  className="ml-1 text-blue-800 hover:text-blue-900"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
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
              required
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
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Image (Required)
          </label>
          <input
            id="imageFile"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {imageBase64 && (
            <img src={imageBase64} alt="Preview" className="mt-4 h-40 object-cover rounded-lg" />
          )}
        </div>

        <button type="submit" className="w-full mt-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Add Exercise
        </button>
      </form>
    </div>
  );
}

export default AddExerciseForm;