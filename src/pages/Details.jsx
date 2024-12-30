import React from "react";

const ResumeBuilderForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Resume Builder Details</h1>
          <p className="text-gray-500">Fill in your details to create your resume</p>
        </div>

        {/* Personal Information */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Personal Photo</label>
          <div className="flex items-center justify-center border-2 border-dashed border-gray-300 p-4 rounded-md bg-gray-50">
            <span className="text-gray-500">Click to upload or drag and drop</span>
          </div>
        </div>

        {/* Basic Information */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Basic Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="Middle Name"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="email"
              placeholder="Communication Email"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="tel"
              placeholder="Mobile"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              placeholder="LinkedIn Profile"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="GitHub Profile"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <input
            type="text"
            placeholder="Current Designation (e.g., Automation Tester, Accountant)"
            className="border border-gray-300 rounded-md p-2 w-full mt-4"
          />
        </div>

        {/* Residence Address */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Residence Address</h2>

          <input
            type="text"
            placeholder="Address Line"
            className="border border-gray-300 rounded-md p-2 w-full mb-4"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              className="border border-gray-300 rounded-md p-2 w-full text-gray-500"
            >
              <option value="">Select Country</option>
            </select>
            <select
              className="border border-gray-300 rounded-md p-2 w-full text-gray-500"
            >
              <option value="">Select State</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              placeholder="City/Sector"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="Pincode"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Back</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilderForm;