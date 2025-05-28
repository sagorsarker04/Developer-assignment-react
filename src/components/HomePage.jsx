import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600">
          <Link to="/">Affpilot Auth</Link>
        </div>

        <div className="space-x-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-indigo-600 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/login"
            className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white px-4 py-2 rounded transition duration-300"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-indigo-100 via-blue-100 to-green-100 px-6 relative overflow-hidden">
        {/* Overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-purple-400/20 to-green-300/10 backdrop-blur-md"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl text-center bg-white/30 backdrop-blur-md rounded-xl p-10 shadow-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            আমাদের ওয়েবসাইটে স্বাগতম!
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            সহজেই একাউন্ট তৈরি করুন অথবা লগইন করুন। আমাদের সার্ভিস ব্যবহারে রেজিস্টার করুন আর নতুন কিছু শিখুন!
          </p>
          <div className="space-x-4">
            <Link
              to="/register"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
            >
              রেজিস্টার করুন
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 font-semibold rounded-lg shadow hover:bg-indigo-100 transition"
            >
              লগইন করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
