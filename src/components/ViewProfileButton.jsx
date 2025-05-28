import React from "react";
import { useNavigate } from "react-router-dom";

const ViewProfileButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile");
  };

  return (
    <button
      onClick={handleClick}
      className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
    >
      Go to My Profile
    </button>
  );
};

export default ViewProfileButton;
