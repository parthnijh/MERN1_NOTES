import React, { useState } from 'react';
import useLogin from '../hooks/useLogin';
import { Link } from 'react-router-dom';

const Login = () => {
  const { login } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(username, password);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col p-8 bg-slate-900 max-w-md w-full rounded-lg shadow-xl border border-yellow-500/20">
        <h1 className="text-3xl font-bold text-yellow-500 mb-6 text-center">Login</h1>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-yellow-500 text-sm font-medium">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="p-3 rounded bg-slate-800 border border-slate-700 focus:border-yellow-500 focus:outline-none text-white"
              required
            />
          </div>
          
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-yellow-500 text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="p-3 rounded bg-slate-800 border border-slate-700 focus:border-yellow-500 focus:outline-none text-white"
              required
            />
          </div>
          
          <button 
            type="submit"
            disabled={isLoading}
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-slate-400">
            Don't have an account?{" "}
           <Link to={"/signup"}>Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;