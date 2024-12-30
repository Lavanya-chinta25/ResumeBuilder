import React, { useState, useEffect } from "react";
import InternshipForm from "./pages/Internship";
import SkillsSection from "./pages/SkillsSec";
import DomainKnowledgeSection from "./pages/Domaink";
import AchievementsSection from "./pages/Achievements";
import InformationP from "./pages/Information";
import ProjectForm from "./pages/ProjectForm";
import Education from "./pages/Education";
import ResumePreview from "./pages/Resprev";
import SkillsForm from "./pages/SkillsSec";
import { Navigate, useNavigate } from "react-router-dom";
import Temp1 from './pages/Temp1';
import html2pdf from 'html2pdf.js';
import { useLocation } from "react-router-dom";
import DomainKnowledgeForm from "./pages/DomainKnw";
import AchievementsForm from "./pages/AchievementsForm";

function Resbui() {
  const [showAchievementsForm, setShowAchievementsForm] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
 
  const location = useLocation(); // Access the passed state
  const { jobStream, jobTitle, template } = location.state || {};
  const navigate = useNavigate();

  const generatePDF = () => {
    const element = document.getElementById("res-pdf");
    html2pdf().from(element).save("resume.pdf");
  };

  const handleRedirect = () => {
    navigate("/jobdomain", {
      state: { jobStream, jobTitle },
    });
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetch('http://localhost:5173/build1')
      .then((response) => response.text())
      .then((data) => setUserInput(data))
      .catch((error) => console.error('Error fetching the code:', error));
  }, []); // Empty dependency array ensures this runs once on mount

  const handleSend = () => {
    if (userInput.trim() !== '') {
        console.log(userInput)
      fetch('http://127.0.0.1:5000/process_input', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'userInput=' + encodeURIComponent(userInput),
      })
        .then(response => response.json())
        .then(data => {
          setMessages(prev => [
            ...prev,
            { text: data.response },
          ]);
        })
        .catch(error => console.error('Error:', error));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };
const [profilepic, setprofilepic] = useState();
const [firstName, setFirstName] = useState("");
const [middleName, setMiddleName] = useState("");
const [lastName, setlastName] = useState("");
const [currentDesignation, setcurrentDesignation] = useState("");
const [addressline, setaddressline] = useState("");
const [country, setcountry] = useState("");
const [state, setstate] = useState("");
const [city, setcity] = useState("");
const [pincode, setpincode] = useState("");
const [email, setemail] = useState("");
const [contact, setcontact] = useState("");
const [linkedin, setlinkedin] = useState("");
const [github, setgithub] = useState("");
const [summary, setsummary] = useState("");
const [skillsList, setSkillsList] = useState([]);
const [internships, setInternships] = useState([  ]);


  return (
    <div className="max-h-screen bg-gray-100 flex gap-8 p-8">
      <div className="w-1/2 bg-white p-8 shadow rounded-lg flex flex-col overflow-y-auto max-h-screen">
        <div className="bg-white shadow-md rounded-lg p-6 w-full">
          <div className="grid grid-cols-3 gap-2">
            <h2 className="w-1/2 text-lg font-semibold text-gray-700 mb-4">
              Selected Details
            </h2>
            <p onClick={handleRedirect} className="text-sm text-right text-gray-500 mb-6">
              {jobStream} | {jobTitle}
            </p>
          </div>
          <InformationP profilepic={profilepic} setprofilepic={setprofilepic} />

          <DomainKnowledgeSection
            setFirstName={setFirstName}
            firstName={firstName}
            setMiddleName={setMiddleName}
            middleName={middleName}
            setlastName={setlastName}
            lastName={lastName}
            setcurrentDesignation={setcurrentDesignation}
            currentDesignation={currentDesignation}
            addressline={addressline}
            setaddressline={setaddressline}
            country={country}
            setcountry={setcountry}
            state={state}
            setstate={setstate}
            city={city}
            setcity={setcity}
            pincode={pincode}
            setpincode={setpincode}
            email={email}
            setemail={setemail}
            contact={contact}
            setcontact={setcontact}
            linkedin={linkedin}
            setlinkedin={setlinkedin}
            github={github}
            setgithub={setgithub}
            summary={summary}
            setsummary= {setsummary}
            />
          <Education />
          <AchievementsSection />
          <InternshipForm  setInternships={setInternships} internships={internships}/>

          <ProjectForm></ProjectForm>

          <SkillsForm skillsList={skillsList} setSkillsList={setSkillsList} ></SkillsForm>
<DomainKnowledgeForm></DomainKnowledgeForm>
          <AchievementsForm></AchievementsForm>

          <div className="mt-8">
            <div className="flex gap-4 mt-4">
              <button
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={handleSend}
              >
                Check Resume Score
              </button>
              <button
                className="w-full px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
                onClick={generatePDF}
              >
                Build Resume
              </button>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
                Back
              </button>
              <button className="px-6 py-2 bg-custom text-white rounded hover:bg-opacity-90">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 bg-white p-8 shadow rounded-lg flex flex-col overflow-y-auto max-h-screen">
        <div id="res-pdf">
          <h2>
            <Temp1
              firstName={firstName}
              lastName={lastName}
              middleName={middleName}
              addressline={addressline}
        country={country}
        state={state}
        city={city}
        pincode={pincode}
        email={email}
        contact={contact}
        linkedin={linkedin}
        github={github}
        skillsList={skillsList}
        summary = {summary}
        internships={internships}
            />
          </h2>
          {messages.map((msg, idx) => (
            <p key={idx}>{msg.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resbui;
