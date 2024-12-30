import React from 'react';

const Temp1 = ({firstName,middleName,lastName,addressline,
  country,
  state,
  city,
  pincode,
  email,
  contact,
  linkedin,summary,skillsList,internships,
  github}) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-800">{firstName}  {middleName} {lastName}</h1>
        <h2 className="text-xl font-semibold text-gray-600">UX DESIGNER</h2>
        <p className="text-gray-500">{addressline} {city} {state}| {email}| {linkedin}</p>
      </header>
 
      {/* Summary */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-blue-800 mb-4">SUMMARY</h3>
        <p className="text-gray-700">
          {summary}
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-blue-800 mb-4">TECHNICAL SKILLS</h3>
        <ul className="grid grid-cols-2 gap-4 text-gray-700">
          {skillsList.map((skills,index)=>(
            <li>{skillsList[index]}</li>
          ))}

        </ul>
      </section>

      {/* Professional Experience */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-blue-800 mb-4">PROFESSIONAL EXPERIENCE</h3>
        {internships.map((e,index)=>(
          <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800">{internships[index].title}, {internships[index].company} </h4>
          <p className="text-gray-600">{internships[index].startDate} - {
            (internships[index].ongoing) ? "present" :internships[index].endDate
            }</p>
          <ul className="list-disc pl-6 text-gray-700">
            {internships[index].description}
          </ul>
        </div>
        ))}
        
        
      </section>

      {/* Education */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-blue-800 mb-4">EDUCATION</h3>
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800">UX Industrial Basics and General Application</h4>
          <p className="text-gray-600">Aug 2016 - Oct 2019</p>
          <p className="text-gray-700">University of Engineering UX Cohort</p>
          <p className="text-gray-700">Major in Automotive Technology</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">Bachelor of Design in Process Engineering</h4>
          <p className="text-gray-600">May 2014 - May 2016</p>
          <p className="text-gray-700">Engineering University</p>
          <p className="text-gray-700">Relevant coursework in Structural Design and Project Management</p>
        </div>
      </section>

      {/* Additional Information */}
      <section>
        <h3 className="text-xl font-bold text-blue-800 mb-4">ADDITIONAL INFORMATION</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Languages: English, French, Mandarin</li>
          <li>Certifications: Professional Design Engineer (PDE) License, Project Management Tech (PMT)</li>
          <li>Awards/Activities: Most Innovative Employee of the Year (2022), Overall Best Employee Division Two (2024), Onboarding Project Lead (2023)</li>
        </ul>
      </section>
    </div>
  );
};

export default Temp1;