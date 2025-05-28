import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DeleteRole = () => {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/v1/roles", {
          credentials: "include",
        });

        const data = await res.json();
        if (res.ok) {
          setRoles(data.data || []);
        } else {
          throw new Error(data.message || "Failed to fetch roles.");
        }
      } catch (error) {
        setMessage({ type: "error", text: error.message });
      }
    };

    fetchRoles();
  }, []);

  const handleDelete = () => {
    if (!selectedRole) {
      setMessage({ type: "error", text: "Please select a role to delete." });
      return;
    }

    const roleObj = roles.find((role) => role.name === selectedRole);
    if (!roleObj) {
      setMessage({ type: "error", text: "Selected role not found." });
      return;
    }

    navigate(`/delete-role?role_id=${roleObj.id}`);
  };

  return (
    <section className="p-6 max-w-md mx-auto mt-2 bg-white rounded-xl shadow-md space-y-4">
      <p className="text-center text-sm text-gray-600">
        Select a role from the list to proceed to the delete page.
      </p>

      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        className="w-full border px-3 py-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">-- Select Role --</option>
        {roles.map((role) => (
          <option key={role.id} value={role.name}>
            {role.name}
          </option>
        ))}
      </select>

      <button
        onClick={handleDelete}
        disabled={loading}
        className={`w-full py-2 rounded-md text-white font-semibold transition ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
        }`}
      >
        {loading ? "Processing..." : "Delete"}
      </button>

      {message && (
        <p className={`text-center text-sm ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
          {message.text}
        </p>
      )}
    </section>
  );
};

export default DeleteRole;
