import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ResendVerificationButton from './Utlis/ResendVerificationButton';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        credentials: 'include',
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('auth', JSON.stringify(data.data));
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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

      {/* Login Form */}
      <div className="flex items-center justify-center py-12 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          {error && (
            <div className="mb-4 text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <button
              type="button"
              onClick={() => navigate('/register')}
              className="w-full py-2 mt-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => navigate('/password-reset-request')}
              className="w-full py-2 mt-2 bg-gray-600 text-white rounded hover:bg-green-700 transition"
            >
              Reset Password
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

export default Login;
