import React from "react";
import { useNavigate } from "react-router-dom";

const ViewAllRolesButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/roles")}
      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow-sm transition"
    >
      View All Roles
    </button>
  );
};

export default ViewAllRolesButton;
