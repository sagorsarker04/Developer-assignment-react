import React, { useEffect, useState } from "react";

const RoleAssignment = () => {
  const [userId, setUserId] = useState("");
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all roles on mount
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

  const handleAssignRole = async () => {
    if (!userId || !selectedRole) {
      setMessage({ type: "error", text: "Please enter user ID and select a role." });
      return;
    }

    setLoading(true);
    setMessage(null);

    const bodyData = { role_name: selectedRole };
    console.log("Sending request body:", bodyData); // 🔍 Debugging line

    try {
      const res = await fetch(`http://localhost:8080/api/v1/roles/${userId}/demote`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: data.message || "User demoted successfully" });
      } else {
        setMessage({ type: "error", text: data.message || "Failed to demote user" });
      }
    } catch (err) {
      console.error("Fetch error:", err); // 🔍 Debugging line
      setMessage({ type: "error", text: "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-4 border rounded-md bg-white shadow-sm">
      <p className="mb-4">Demote user by selecting a role.</p>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/2"
        />

        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/2"
        >
          <option value="">Select Role</option>
          {roles.map((role) => (
            <option key={role.id} value={role.name}>
              {role.name}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleAssignRole}
        disabled={loading}
        className={`mt-4 w-full py-2 rounded text-white ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Demoting..." : "Demote"}
      </button>

      {message && (
        <p className={`mt-2 text-center ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
          {message.text}
        </p>
      )}
    </section>
  );
};

export default RoleAssignment;
