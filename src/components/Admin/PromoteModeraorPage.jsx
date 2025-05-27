import React, { useState } from "react";
import { useParams } from "react-router-dom";

const PromoteModerator = () => {
  const { id } = useParams(); // URL theke user_id
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePromote = async () => {
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(`/roles/${id}/promote/moderator`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
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
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-6">Promote User to Moderator</h2>

      <p className="mb-4">User ID: <span className="font-mono">{id}</span></p>

      <button
        onClick={handlePromote}
        disabled={loading}
        className={`w-full py-2 rounded text-white ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Promoting..." : "Promote"}
      </button>

      {message && (
        <p
          className={`mt-4 text-center ${
            message.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  );
};

export default PromoteModerator;
