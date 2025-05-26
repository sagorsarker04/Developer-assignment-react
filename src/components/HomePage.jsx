import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-400 to-blue-500 text-white px-6">
      <h1 className="text-5xl font-extrabold mb-6">আমাদের ওয়েবসাইটে স্বাগতম!</h1>
      <p className="text-lg mb-8 max-w-xl text-center">
        সহজেই একাউন্ট তৈরি করুন অথবা লগইন করুন।  
        আমাদের সার্ভিস ব্যবহারে রেজিস্টার করুন আর নতুন কিছু শিখুন!
      </p>
      <div className="space-x-4">
        <Link
          to="/register"
          className="px-6 py-3 bg-white text-green-600 font-semibold rounded shadow hover:bg-gray-100 transition"
        >
          রেজিস্টার করুন
        </Link>
        <Link
          to="/login"
          className="px-6 py-3 bg-white text-green-600 font-semibold rounded shadow hover:bg-gray-100 transition"
        >
          লগইন করুন
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
