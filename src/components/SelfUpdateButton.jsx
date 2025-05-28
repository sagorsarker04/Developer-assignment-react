import React from "react";
import { useNavigate } from "react-router-dom";

const SelfUpdateButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/update-profile");
  };

  return (
    <button
      onClick={handleClick}
      className="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition"
    >
      Update My Profile
    </button>
  );
};

export default SelfUpdateButton;
