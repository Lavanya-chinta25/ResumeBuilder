import React, { useState } from 'react';

function AchievementsForm() {
  const [achievementsList, setAchievementsList] = useState([]); // Stores all the achievements

  // Function to add a new empty achievement field
  const addAchievementField = () => {
    if (achievementsList.length < 6) {
      setAchievementsList([...achievementsList, ""]);
    }
  };

  // Function to handle input change for each achievement field
  const handleInputChange = (e, index) => {
    const updatedList = [...achievementsList];
    updatedList[index] = e.target.value;
    setAchievementsList(updatedList);
  };

  // Function to remove an achievement field
  const removeAchievementField = (index) => {
    const updatedList = achievementsList.filter((_, i) => i !== index);
    setAchievementsList(updatedList);
  };

  return (
    <form className="mt-6">
      <div className="mb-6">
        {achievementsList.length < 6 && (
          <div className="mt-4">
            <button
              type="button"
              onClick={addAchievementField}
              className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-300"
            >
              + Add Achievement
            </button>
          </div>
        )}
        <label className="block text-sm font-medium text-gray-700">Achievements (Optional)</label>
        <p className="text-xs text-gray-500">You can add up to 6 achievements.</p>
      </div>

      <div className="space-y-4">
        {/* Render input fields dynamically */}
        {achievementsList.map((achievement, index) => (
          <div key={index} className="flex items-center gap-4">
            <input
              type="text"
              value={achievement}
              onChange={(e) => handleInputChange(e, index)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder={`Achievement #${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeAchievementField(index)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </form>
  );
}

export default AchievementsForm;
