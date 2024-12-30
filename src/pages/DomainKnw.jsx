import React, { useState } from 'react';

function DomainKnowledgeForm() {
  const [domainKnowledgeList, setDomainKnowledgeList] = useState([]); // Stores all domain knowledge areas

  // Function to add a new empty domain knowledge field
  const addDomainKnowledgeField = () => {
    if (domainKnowledgeList.length < 6) {
      setDomainKnowledgeList([...domainKnowledgeList, ""]);
    }
  };

  // Function to handle input change for each domain knowledge field
  const handleInputChange = (e, index) => {
    const updatedList = [...domainKnowledgeList];
    updatedList[index] = e.target.value;
    setDomainKnowledgeList(updatedList);
  };

  // Function to remove a domain knowledge field
  const removeDomainKnowledgeField = (index) => {
    const updatedList = domainKnowledgeList.filter((_, i) => i !== index);
    setDomainKnowledgeList(updatedList);
  };

  return (
    <form className="mt-6">
      <div className="mb-6">
      {domainKnowledgeList.length < 6 && (
        <div className="mt-4">
          <button
            type="button"
            onClick={addDomainKnowledgeField}
            className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-300"
          >
            + Add Domain Knowledge
          </button>
        </div>
      )}
        <label className="block text-sm font-medium text-gray-700">Domain Knowledge (Optional)</label>
        <p className="text-xs text-gray-500">You can add up to 6 areas of expertise.</p>
      </div>

      <div className="space-y-4">
        {/* Render input fields dynamically */}
        {domainKnowledgeList.map((knowledge, index) => (
          <div key={index} className="flex items-center gap-4">
            <input
              type="text"
              value={knowledge}
              onChange={(e) => handleInputChange(e, index)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder={`Domain Knowledge #${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeDomainKnowledgeField(index)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Add new field button */}
      
    </form>
  );
}

export default DomainKnowledgeForm;
