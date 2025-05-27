import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GetRoleDetails = () => {
  const [roleId, setRoleId] = useState("");
  const navigate = useNavigate();

  const handleGoToDetails = () => {
    if (!roleId) {
      alert("Please enter a Role ID");
      return;
    }
    // Navigate to new page with roleId as URL param
    navigate(`/role-details/${roleId}`);
  };

  return (
    <section className="p-4 border rounded-md bg-white shadow-sm text-center max-w-xl mx-auto mt-6">
      <h3 className="text-lg font-medium mb-2">Get Role Details</h3>
      <p className="mb-4">Retrieve detailed information about a specific role.</p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Enter Role ID"
          value={roleId}
          onChange={(e) => setRoleId(e.target.value)}
          className="border rounded px-3 py-2 w-full sm:w-1/2"
        />
        <button
          onClick={handleGoToDetails}
          className="px-5 py-2 rounded text-white bg-blue-600 hover:bg-blue-700"
        >
          Go to Details Page
        </button>
      </div>
    </section>
  );
};

export default GetRoleDetails;
