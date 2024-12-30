import React,{useState} from 'react';

function DomainKnowledgeSection({firstName,setFirstName,lastName,middleName,setlastName,setMiddleName,currentDesignation, setcurrentDesignation,addressline,
  setaddressline,
  country,
  setcountry,
  state,
  setstate,
  city,
  setcity,
  pincode,
  setpincode,
  email,
  setemail,
  contact,
  setcontact,
  linkedin,
  setlinkedin,
  github,
  summary,setsummary,
  setgithub}) {
  const [showDomainForm, setShowDomainForm] = useState(true);
  const [SumaryForm, setShowSumaryForm] = useState(true);
  return (
    <div>
            <h2 className="text-sm font-semibold text-gray mb-2">
              Basic Information
            </h2>
            <button className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-300 mb-4" onClick={() => setShowDomainForm((prev) => !prev)}>
              + Add Basic Information
            </button>
            {showDomainForm ? <></>:
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  placeholder="First Name" onChange={(e)=>{setFirstName(e.target.value)}}
                  className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Middle Name" onChange={(e)=>{setMiddleName(e.target.value)}}
                  className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name" onChange={(e)=>{setlastName(e.target.value)}}
                  className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <h2 className="text-sm font-semibold text-gray mb-2">
                Current Designation
              </h2>
              <input
                type="text"
                placeholder="e.g., Fresher, Automation Tester, Accountant" onClick={(e)=>{setcurrentDesignation(e.target.value)}}
                className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <h2 className="text-sm font-semibold text-gray mb-2">
                Residence Address
              </h2>
              <div className="grid grid-cols-1 gap-3">
                <input
                  type="text"
                  placeholder="Address Line" onChange={(e)=>{setaddressline(e.target.value)}}
                  className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Country" onChange={(e)=>{setcountry(e.target.value)}}
                    className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="State" onChange={(e)=>{setstate(e.target.value)}}
                    className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="City/Sector" onChange={(e)=>{setcity(e.target.value)}}
                    className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Pincode" onChange={(e)=>{setpincode(e.target.value)}}
                    className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <h2 className="text-sm font-semibold text-gray mb-2">
                  Communication Email
                </h2>
                <input
                  type="text"
                  placeholder="Communication Email" onChange={(e)=>{setemail(e.target.value)}}
                  className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <h2 className="text-sm font-semibold text-gray mb-2">
                  Mobile Number{" "}
                </h2>
                <input
                  type="text"
                  placeholder="Mobile Number" onChange={(e)=>{setcontact(e.target.value)}}
                  className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <h2 className="text-sm font-semibold text-gray mb-2">
                  Linkedin Profile
                </h2>
                <input
                  type="text"
                  placeholder="Linkedin Profile" onChange={(e)=>{setlinkedin(e.target.value)}}
                  className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <h2 className="text-sm font-semibold text-gray mb-2">
                  Github Profile
                </h2>
                <input
                  type="text" onChange={(e)=>{setgithub(e.target.value)}}
                  placeholder="GitHub Profile"
                  className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
<h2 className="text-sm font-semibold text-gray mb-2">
              Professional Summary
            </h2>
<button className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-300 mb-4" onClick={() => setShowSumaryForm((prev) => !prev)}>
              + Add Professional Summary
            </button>
                {SumaryForm? <></>:<textarea
                  type="text" onChange={(e)=>{setsummary(e.target.value)}}
                  placeholder="Summary about yourself" rows={4}
                  className="border border-gray-300 rounded-md py-2 px-3 mb-4 text-sm focus:outline-none focus:ring-4 focus:ring-blue-500"
                />}
            </div>
    </div>}</div>
  );
}

export default DomainKnowledgeSection;