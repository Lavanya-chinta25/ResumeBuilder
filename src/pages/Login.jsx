import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import  Logo from '../assets/logo-1.png'
import SignInwithGoogle from "./SigninwithGoogle";
export default function WelcomePage() {
  
    const handleSubmit = async (e) => {
      e.preventDefault();
     
    };
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      {/* Centered Container */}
      <div className="w-full max-w-md px-6">
        {/* Logo */}
        <div className="flex justify-center mb-2">
          <div className="rounded-full h-[130px] w-[130px] flex items-center justify-center ">
            <img src={Logo} alt=""  />
          </div>
        </div>

        {/* Welcome Text */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome to Resume Builder
          </h1>
          <p className="text-gray-600">Please sign in to continue</p>
        </div>

        {/* Sign-in Buttons */}
        <div className="space-y-4">
          <button
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
           <div className="bg-gray-100 rounded-full h-5 w-5 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">G</span>
            </div>
            <SignInwithGoogle/>
          </button>

          <button 
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <div className="bg-gray-100 rounded-full h-5 w-5 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">M</span>
            </div>
            Sign in with Microsoft
          </button>
        </div>
      </div>
    </div>
  );
}