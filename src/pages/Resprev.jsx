import React from 'react';

function ResumePreview() {
  return (
    <div className="w-1/2 bg-white p-8 shadow rounded-lg flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Preview</h3>
        <button className="text-custom hover:text-opacity-80">
          <i className="fas fa-expand"></i> Maximize
        </button>
      </div>
      <div className="border rounded-lg p-4 h-[calc(100vh-300px)] overflow-auto">
        <div id="resumePreview" className="min-h-full">Your resume preview will appear here as you type...</div>
      </div>
      <div className="flex justify-end mt-auto pt-4">
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 flex items-center">
          <i className="fas fa-download mr-2"></i> Download PDF
        </button>
      </div>
    </div>
  );
}

export default ResumePreview;