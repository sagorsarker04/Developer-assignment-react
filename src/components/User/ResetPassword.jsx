import React, { useState } from "react";

const ResetPassowrd = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await fetch(
        "http://localhost:8080/api/v1/auth/password-reset-request",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Password reset link sent! Please check your email.");
      } else {
        setError(data.message || "❌ Failed to send reset link.");
      }
    } catch (err) {
      setError("❌ Server error. Try again later.");
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {message && (
          <div className="rounded border border-green-400 bg-green-50 p-2 text-green-700">
            {message}
          </div>
        )}
        {error && (
          <div className="rounded border border-red-400 bg-red-50 p-2 text-red-700">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="w-full rounded bg-indigo-600 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ResetPassowrd;
