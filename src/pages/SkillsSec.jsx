import React, { useState } from 'react';

function SkillsForm( {setSkillsList,skillsList}) {

  // Function to add a new empty skill field
  const addSkillField = () => {
    if (skillsList.length < 6) {
      setSkillsList([...skillsList, ""]);
    }
  };

  // Function to handle input change for each skill field
  const handleInputChange = (e, index) => {
    const updatedList = [...skillsList];
    updatedList[index] = e.target.value;
    setSkillsList(updatedList);
  };

  // Function to remove a skill field
  const removeSkillField = (index) => {
    const updatedList = skillsList.filter((_, i) => i !== index);
    setSkillsList(updatedList);
  };

  return (
    <form className="mt-6">
      <div className="mb-6">
        {skillsList.length < 6 && (
          <div className="mt-4">
            <button
              type="button"
              onClick={addSkillField}
              className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-300"
            >
              + Add Skill
            </button>
          </div>
        )}
        <label className="block text-sm font-medium text-gray-700">Relevant Skills (Optional)</label>
        <p className="text-xs text-gray-500">You can add up to 6 skills.</p>
      </div>

      <div className="space-y-4">
        {/* Render input fields dynamically */}
        {skillsList.map((skill, index) => (
          <div key={index} className="flex items-center gap-4">
            <input
              type="text"
              value={skill}
              onChange={(e) => {handleInputChange(e, index)}}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder={`Skill #${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeSkillField(index)}
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

export default SkillsForm;
