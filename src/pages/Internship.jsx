import React, { useState } from 'react';

function InternshipForm({internships,setInternships}) {
  
  // Handle input changes
  const handleInputChange = (e, index) => {
    const { name, value, type, checked } = e.target;
    const updatedInternships = [...internships];
    if (type === "checkbox") {
      updatedInternships[index][name] = checked;
    } else {
      updatedInternships[index][name] = value;
    }
    setInternships(updatedInternships);
  };

  // Handle adding new internship
  const handleAddInternship = () => {
    setInternships([
      ...internships,
      { 
        title: "", 
        company: "", 
        location: "", 
        startDate: "", 
        endDate: "", 
        type: "paid", 
        ongoing: false, 
        description: "" 
      },
    ]);
  };

  return (
    <form className="mt-6">
      <div className="mb-6">
        <button
          type="button"
          onClick={handleAddInternship}
          className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-300 mb-4"
        >
          + Add Internship
        </button>
      </div>

      {internships.map((internship, index) => (
        <div key={index} className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Internship #{index + 1}</h3>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Internship Title */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Internship Title (Optional)</label>
              <input
                type="text"
                name="title"
                value={internship.title}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Internship Title"
              />
            </div>

            {/* Organization/Company */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Organization/Company</label>
              <input
                type="text"
                name="company"
                value={internship.company}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Organization/Company"
                required
              />
            </div>

            {/* Location */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={internship.location}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Location"
                required
              />
            </div>

            {/* Start Date */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={internship.startDate}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Start Date"
                required
              />
            </div>

            {/* End Date */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="date"
                name="endDate"
                value={internship.endDate}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="End Date"
                required
              />
            </div>
          </div>

          {/* Paid/Unpaid */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Internship Type</label>
            <select
              name="type"
              value={internship.type}
              onChange={(e) => handleInputChange(e, index)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
            </select>
          </div>

          {/* Ongoing Checkbox */}
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="ongoing"
                checked={internship.ongoing}
                onChange={(e) => handleInputChange(e, index)}
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2 text-sm">Ongoing Internship</span>
            </label>
          </div>

          {/* Internship Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description of Internship</label>
            <textarea
              name="description"
              value={internship.description}
              onChange={(e) => handleInputChange(e, index)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Describe your internship (max 500 characters)"
              maxLength="500"
            />
          </div>
        </div>
      ))}
    </form>
  );
}

export default InternshipForm;
