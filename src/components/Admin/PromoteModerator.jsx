import React, { useState } from "react";

const PromoteModerator = () => {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePromote = async () => {
    if (!userId.trim()) {
      setMessage({ type: "error", text: "Please enter a valid user ID." });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(`http://localhost:8080/api/v1/roles/${userId}/promote/moderator`, {
        method: "POST",
        credentials:"include",
        headers: {
          "Content-Type": "application/json",
          // Authorization: "Bearer <token>", // jodi lage auth
        },
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: data.message || "User promoted to Moderator successfully." });
      } else {
        setMessage({ type: "error", text: data.message || "Failed to promote user." });
      }
    } catch (error) {
      setMessage({ type: "error", text: "An error occurred. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="border px-3 py-2 rounded w-full mb-3"
      />
      <button
        onClick={handlePromote}
        disabled={loading}
        className={`w-full py-2 rounded text-white ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
        }`}
      >
        {loading ? "Promoting..." : "Promote"}
      </button>

      {message && (
        <p className={`mt-2 text-center ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
          {message.text}
        </p>
      )}
    </div>
  );
};

export default PromoteModerator;
