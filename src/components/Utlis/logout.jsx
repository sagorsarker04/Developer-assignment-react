import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:8080/api/v1/auth/logout", {
        method: "POST",
        credentials: "include", // cookie সহ পাঠানোর জন্য
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        localStorage.clear();
        navigate("/login");
      } else {
        const data = await res.json();
        setError(data.message || "Logout failed.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <button
        onClick={handleLogout}
        disabled={loading}
        className={`px-4 py-2 rounded text-white ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
        }`}
      >
        {loading ? "Logging out..." : "Logout"}
      </button>
      {error && <p className="mt-2 text-red-600">{error}</p>}
    </div>
  );
};

export default Logout;
