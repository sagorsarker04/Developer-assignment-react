import React from "react";
import { useNavigate } from "react-router-dom";

const ResendVerificationButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/resend-verification");
  };

  return (
    <button
      onClick={handleClick}
      className="text-sm text-blue-600 hover:underline mt-4"
    >
      Resend Verification Email
    </button>
  );
};

export default ResendVerificationButton;
