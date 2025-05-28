import React, { useState } from "react";
import Navbar from "../Utlis/Navbar";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/api/v1/auth/password-reset-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "✅ Password reset link sent! Please check your email." });
      } else {
        setMessage({ type: "error", text: data.message || "❌ Failed to send reset link." });
      }
    } catch (err) {
      setMessage({ type: "error", text: "❌ No verified user found." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-sm bg-white p-6 rounded shadow-md space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Reset Password</h2>
            <p className="text-sm text-gray-600">Enter your email to receive a reset link.</p>
          </div>

          {message && (
            <div
              className={`text-sm p-3 rounded border ${
                message.type === "success"
                  ? "bg-green-50 border-green-400 text-green-700"
                  : "bg-red-50 border-red-400 text-red-700"
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
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
              disabled={loading}
              className={`w-full rounded py-2 text-white font-medium transition ${
                loading
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
