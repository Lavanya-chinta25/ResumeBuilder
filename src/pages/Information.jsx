import React,{useState} from "react";

function InformationP(){
  
    const [showSkillsForm, setShowSkillsForm] = useState(true);
  return <>
  <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray mb-2">
              Personal Information
            </h2>
            <button className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-300" onClick={() => setShowSkillsForm((prev) => !prev)}>
              + Add Personal Information
            </button>
          </div>
          {showSkillsForm ?<></> :
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-gray-400 text-xl">&#128100;</span>
              </div>
              <button className="bg-black text-white py-2 px-4 rounded-md text-sm hover:bg-gray-800">
                Upload Photo
              </button>
              <p className="text-gray-500 text-xs mt-2">
                Upload a professional photo (Max 5MB)
              </p>
            </div>
          }
  </>
}
export default InformationP