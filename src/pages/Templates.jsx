import React from "react";

const ResumeTemplateSelector = () => {
  const templates = [
    {
      id: 1,
      name: "Modern Template",
      description: "Clean and professional design with modern layout",
    },
    {
      id: 2,
      name: "Creative Template",
      description: "Stand out with unique design elements",
    },
    {
      id: 3,
      name: "Classic Template",
      description: "Traditional and time-tested format",
    },
    {
      id: 4,
      name: "Minimal Template",
      description: "Simple and elegant design focus",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Select Your Resume Template</h1>
          <p className="text-gray-600">
            Choose a template and customize your resume
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gray-100"
            >
              <div className="h-32 bg-gray-200 rounded-t-lg flex items-center justify-center">
                <p className="text-gray-400">Image</p>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{template.name}</h3>
                <p className="text-sm text-gray-500">{template.description}</p>
                <button className="mt-4 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition">
                  Select Template
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition">
            Back
          </button>
          <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplateSelector;