import React, { useState } from 'react';
import useSignup from '../hooks/useSignup';
import { Link } from 'react-router-dom';
import Login from './Login';
const Signup = () => {
  const { signup } = useSignup();
  const [name, setName] = useState("");
  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPasssword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(name, username, password, confirmpassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-slate-900 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-yellow-500">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onChange={(e) => setuserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onChange={(e) => setConfirmPasssword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition-colors"
          >
            Submit
          </button>
        </form>
        <p className='text-2xl font-bold text-center text-yellow-500'>Aleardy  a user? <Link to={"/login"}>Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
