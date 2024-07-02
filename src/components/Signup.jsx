import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (email && name && password) {
      // Here you can perform further actions like sending data to the backend or navigating to the next page
      console.log("Signup Successful!");
    } else {
      alert("Please fill out all the fields.");
    }
  };

  return (
    <div>
      <div className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          id="bg-video"
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://videocdn.cdnpk.net/joy/content/video/free/video0468/large_preview/_import_615e879da73ba7.00965427.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="flex items-center justify-center mb-2 h-full mx-auto w-[500px] relative z-10">
          <div className="container bg-white rounded-lg border-4 border-black p-6">
            <h1 className="uppercase text-black text-center font-bold mb-4">Sign up</h1>
            <div className="mb-4">
              <p className="text-xl">Email</p>
              <input
                type="text"
                className="w-full rounded-md pl-5 py-2 mt-2 bg-gray-300"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <p className="text-xl">Name</p>
              <input
                type="text"
                className="w-full rounded-md pl-5 py-2 mt-2 bg-gray-300"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <p className="text-xl">Password</p>
              <input
                type="password"
                className="w-full rounded-md pl-5 py-2 mt-2 bg-gray-300"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                className={`bg-blue-400 text-black p-4 px-20 py-2 ${!(email && name && password) && 'cursor-not-allowed opacity-50'}`}
                onClick={handleSignup}
                disabled={!(email && name && password)}
              >
                Signup
              </button>
            </div>
            <p className="text-blue-500 hover:text-blue-700 ml-28 underline font-medium">
              Already have an account? <Link to="/Login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
