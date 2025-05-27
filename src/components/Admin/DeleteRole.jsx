import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DeleteRole = () => {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Navigation hook

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
          throw new Error(data.message || "Failed to fetch roles");
        }
      } catch (error) {
        setMessage({ type: "error", text: error.message });
      }
    };
    fetchRoles();
  }, []);

  const handleDelete = () => {
    if (!selectedRole) {
      setMessage({ type: "error", text: "Please select a role." });
      return;
    }

    const roleObj = roles.find((role) => role.name === selectedRole);
    if (!roleObj) {
      setMessage({ type: "error", text: "Role not found." });
      return;
    }

    navigate(`/delete-role?role_id=${roleObj.id}`);
  };

  return (
    <section className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">

      <h2 className="text-lg font-semibold text-center">Assign a Role</h2>

      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        className="w-full border px-3 py-2 rounded text-gray-700"
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
        className={`w-full py-2 rounded text-white font-semibold ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
        }`}
      >
        {loading ? "Processing..." : "Delete"}
      </button>

      {message && (
        <p className={`text-center ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
          {message.text}
        </p>
      )}
    </section>
  );
};

export default DeleteRole;
