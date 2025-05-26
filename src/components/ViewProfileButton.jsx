import React from "react";
import { useNavigate } from "react-router-dom";

const ViewProfileButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile"); // Redirect to profile page
  };

  return (
    <section className="p-4 border rounded-md bg-white shadow-sm">
      <h3 className="text-lg font-medium mb-2">View My Profile</h3>
      <p className="mb-2">View your personal details and account information.</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleClick}
      >
        Go to My Profile
      </button>
    </section>
  );
};

export default ViewProfileButton;
