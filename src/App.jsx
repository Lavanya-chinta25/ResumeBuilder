import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Removed Router here, it's already in index.js
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Firebase Authentication imports
import Login from './pages/Login';
import Profile from './pages/Profile';
import Temp1 from './pages/Temp1.jsx';
import Template from './pages/Templates';
import Details from './pages/Details';
import Signup from './pages/Signup';
import JobDomain from './pages/Jobdomain';
import Api from './pages/Api';
import { initializeApp } from 'firebase/app'; // Firebase initialization
import { firebaseConfig } from './pages/firebase'; // Your Firebase config file
import './index.css';
import ResBui from  './Resbui.jsx'
import Resbui from './Resbui.jsx';

// Initialize Firebase
initializeApp(firebaseConfig);

const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* If the user is not logged in, show the Login page */}
        {/* <Route path="/" element={0 ? <Profile></Profile> : <Login />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/template" element={<Resbui />} />
        <Route path="/build1" element={<Temp1 />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/jobdomain" element={<JobDomain />} />
        <Route path="/Api" element={<Api />} />
      </Routes>
    </div>
  );
};

export default App;
