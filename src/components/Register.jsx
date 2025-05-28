import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResendVerificationButton from "./Utlis/ResendVerificationButton";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await fetch("http://localhost:8080/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Registration successful! Redirecting to login...");
        setFormData({
          username: "",
          first_name: "",
          last_name: "",
          email: "",
          password: "",
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setError(data.message || "Error occurred");
      }
    } catch (err) {
      setError("Email or Username already taken");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
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
            className="text-gray-700 hover:text-indigo-600 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded transition duration-300"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Register Form */}
      <div className="flex items-center justify-center py-12 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">রেজিস্টার ফর্ম</h2>

          {message && (
            <p className="mb-4 text-green-600 text-center">{message}</p>
          )}
          {error && <p className="mb-4 text-red-600 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Register
            </button>

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="w-full py-2 mt-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Login
            </button>

            <div className="mt-4 text-center">
              <ResendVerificationButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
