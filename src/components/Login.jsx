import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter both email and password.');
      return;
    }
    // Add your login logic here, e.g., sending a request to the backend for authentication
    // If login is successful, navigate to the next page
    // If login fails, display an error message
  };

  return (
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
          <h1 className="uppercase text-black text-center font-bold mb-4">Login Page</h1>
          <div className="mb-4">
            <p className="text-xl">Email</p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md pl-5 py-2 mt-2 bg-gray-300"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-4">
            <p className="text-xl">Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md pl-5 py-2 mt-2 bg-gray-300"
              placeholder="Enter Your Password"
            />
          </div>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <div className="flex justify-center">
            <button onClick={handleLogin} className="bg-blue-400 text-black p-4 px-20 py-2">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
