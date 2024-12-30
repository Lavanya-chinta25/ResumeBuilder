import React, { useState } from "react";

function AchievementsSection() {
  const [certifications, setCertifications] = useState([
  ]);

  const [errors, setErrors] = useState({});

  // Handle input change for a specific certification
  const handleCertChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCertifications = [...certifications];
    updatedCertifications[index][name] = value;
    setCertifications(updatedCertifications);
  };

  // Add a new certification form group
  const addCertification = () => {
    setCertifications([
      ...certifications,
      { certName: "", certId: "", certOrg: "", certYear: "" },
    ]);
  };

  // Validate all certifications
  const validateCertifications = () => {
    const newErrors = {};
    certifications.forEach((cert, index) => {
      if (!cert.certName) newErrors[`certName-${index}`] = "Certification Name is required";
      if (!cert.certId) newErrors[`certId-${index}`] = "Certification ID is required";
      if (!cert.certOrg) newErrors[`certOrg-${index}`] = "Institute/Organization is required";
      if (!cert.certYear) newErrors[`certYear-${index}`] = "Year of Completion is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateCertifications()) {
      console.log("Form submitted successfully!", certifications);
      // Reset form after submission
      setCertifications([{ certName: "", certId: "", certOrg: "", certYear: "" }]);
    } else {
      console.log("Please fill out all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="mb-6">
        <button
          type="button"
          onClick={addCertification}
          className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-300 mb-4"
        >
          + Add Certification
        </button>
      </div>

      {certifications.map((cert, index) => (
        <div key={index} className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Certification #{index + 1}</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Certification Name</label>
              <input
                type="text"
                name="certName"
                value={cert.certName}
                onChange={(e) => handleCertChange(e, index)}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${errors[`certName-${index}`] ? "border-red-500" : ""}`}
              />
              {errors[`certName-${index}`] && <p className="text-red-500 text-xs">{errors[`certName-${index}`]}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Certification ID</label>
              <input
                type="text"
                name="certId"
                value={cert.certId}
                onChange={(e) => handleCertChange(e, index)}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${errors[`certId-${index}`] ? "border-red-500" : ""}`}
              />
              {errors[`certId-${index}`] && <p className="text-red-500 text-xs">{errors[`certId-${index}`]}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Authorized Institute/Organization</label>
              <input
                type="text"
                name="certOrg"
                value={cert.certOrg}
                onChange={(e) => handleCertChange(e, index)}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${errors[`certOrg-${index}`] ? "border-red-500" : ""}`}
              />
              {errors[`certOrg-${index}`] && <p className="text-red-500 text-xs">{errors[`certOrg-${index}`]}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Year of Completion</label>
              <input
                type="text"
                name="certYear"
                value={cert.certYear}
                onChange={(e) => handleCertChange(e, index)}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${errors[`certYear-${index}`] ? "border-red-500" : ""}`}
              />
              {errors[`certYear-${index}`] && <p className="text-red-500 text-xs">{errors[`certYear-${index}`]}</p>}
            </div>
          </div>
        </div>
      ))}
    </form>
  );
}

export default AchievementsSection;
