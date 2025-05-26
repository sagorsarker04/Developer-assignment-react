import React from "react";
import { useNavigate } from "react-router-dom";

const SelfUpdateButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/update-profile");
  };

  return (
    <section className="p-4 border rounded-md bg-white shadow-sm">
      <h3 className="text-lg font-medium mb-2">Self Update</h3>
      <p className="mb-2">Update your personal information like name, email, etc.</p>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={handleClick}
      >
        Update My Profile
      </button>
    </section>
  );
};

export default SelfUpdateButton;
