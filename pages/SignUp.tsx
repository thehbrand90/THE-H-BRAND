import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';

const { Link } = ReactRouterDOM;

const SignUp: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-20 max-w-[1600px] mx-auto min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-10 md:p-14 shadow-lg border border-gray-100">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2 text-[#222625]">JOIN US</h1>
          <p className="text-sm text-gray-500">Create your account to write trustworthy reviews.</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Name</label>
            <input 
              type="text" 
              required
              className="w-full bg-[#f9f9f9] border-b border-gray-300 p-3 focus:outline-none focus:border-black transition-colors" 
              placeholder="Your Name" 
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email (ID)</label>
            <input 
              type="email" 
              required
              className="w-full bg-[#f9f9f9] border-b border-gray-300 p-3 focus:outline-none focus:border-black transition-colors" 
              placeholder="your@email.com" 
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone</label>
            <input 
              type="tel" 
              required
              className="w-full bg-[#f9f9f9] border-b border-gray-300 p-3 focus:outline-none focus:border-black transition-colors" 
              placeholder="010-0000-0000" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Password</label>
              <input 
                type="password" 
                required
                className="w-full bg-[#f9f9f9] border-b border-gray-300 p-3 focus:outline-none focus:border-black transition-colors" 
                placeholder="********" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Confirm Password</label>
              <input 
                type="password" 
                required
                className="w-full bg-[#f9f9f9] border-b border-gray-300 p-3 focus:outline-none focus:border-black transition-colors" 
                placeholder="********" 
              />
            </div>
          </div>

          <div className="pt-4">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input type="checkbox" required className="mt-1 form-checkbox h-4 w-4 text-black rounded border-gray-300 focus:ring-black" />
              <span className="text-xs text-gray-500 leading-relaxed">
                I agree to the <a href="#" className="underline text-black">Terms of Service</a> and <a href="#" className="underline text-black">Privacy Policy</a>.<br/>
                <span className="text-gray-400">We prioritize the protection of your personal information.</span>
              </span>
            </label>
          </div>

          <button type="submit" className="w-full bg-[#222625] text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors mt-6">
            Create Account
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500 mb-2">Already have an account?</p>
          <Link to="/login" className="text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors underline">
            Sign In here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;