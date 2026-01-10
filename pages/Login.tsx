import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const { Link } = ReactRouterDOM;

const Login: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-20 max-w-[1600px] mx-auto min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-10 shadow-lg border border-gray-100">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2 text-[#222625]">LOGIN</h1>
          <p className="text-sm text-gray-500">Welcome back to THE H BRAND</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
            <input 
              type="email" 
              required
              className="w-full bg-[#f9f9f9] border-b border-gray-300 p-3 focus:outline-none focus:border-black transition-colors" 
              placeholder="your@email.com" 
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Password</label>
            <input 
              type="password" 
              required
              className="w-full bg-[#f9f9f9] border-b border-gray-300 p-3 focus:outline-none focus:border-black transition-colors" 
              placeholder="Enter your password" 
            />
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="form-checkbox h-3 w-3 text-black rounded border-gray-300 focus:ring-black" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:text-black underline">Forgot Password?</a>
          </div>

          <button type="submit" className="w-full bg-[#222625] text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
            Sign In
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500 mb-4">Don't have an account yet?</p>
          <Link to="/signup" className="inline-flex items-center text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors">
            Create an Account <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;