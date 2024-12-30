import React, { useState } from 'react';

function ProjectForm() {
  const [projects, setProjects] = useState([
    
  ]);

  // Handle input changes
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = [...projects];
    updatedProjects[index][name] = value;
    setProjects(updatedProjects);
  };

  // Handle adding new project
  const handleAddProject = () => {
    setProjects([
      ...projects,
      { 
        projectName: "", 
        client: "", 
        startDate: "", 
        endDate: "", 
        projectLink: "", 
        attachments: "" 
      },
    ]);
  };

  return (
    <form className="mt-6">
      <div className="mb-6">
        <button
          type="button"
          onClick={handleAddProject}
          className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-300 mb-4"
        >
          + Add Project
        </button>
      </div>

      {projects.map((project, index) => (
        <div key={index} className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Project #{index + 1}</h3>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Project Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Project Name (Optional)</label>
              <input
                type="text"
                name="projectName"
                value={project.projectName}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Project Name"
              />
            </div>

            {/* Client/Organization */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Client/Organization</label>
              <input
                type="text"
                name="client"
                value={project.client}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Client/Organization"
                required
              />
            </div>

            {/* Start Date */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={project.startDate}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* End Date */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="date"
                name="endDate"
                value={project.endDate}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          {/* Project Link */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Project Link (Optional)</label>
            <input
              type="url"
              name="projectLink"
              value={project.projectLink}
              onChange={(e) => handleInputChange(e, index)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="https://yourprojectlink.com"
            />
          </div>

          {/* Attachments */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Attachments (Optional)</label>
            <input
              type="file"
              name="attachments"
              onChange={(e) => handleInputChange(e, index)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      ))}
    </form>
  );
}

export default ProjectForm;
