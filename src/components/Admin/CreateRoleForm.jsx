import React, { useState } from "react";

const CreateRoleForm = () => {
  const [newRole, setNewRole] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleCreateRole = async () => {
    if (!newRole.trim()) {
      setMessage({ type: "error", text: "Please enter a role name." });
      return;
    }

    if (!newDescription.trim()) {
      setMessage({ type: "error", text: "Please enter a description." });
      return;
    }

    const roleData = {
      name: newRole.trim(),
      description: newDescription.trim(),
    };
    console.log("Sending body:", roleData);

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("http://localhost:8080/api/v1/roles/create", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(roleData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: data.message || "Role created successfully." });
        setNewRole("");
        setNewDescription("");
      } else {
        setMessage({ type: "error", text: data.message || "Failed to create role." });
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage({ type: "error", text: "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-4 border rounded-md bg-white shadow-sm">
      <h3 className="text-lg font-medium mb-2">Create Role</h3>
      <p className="mb-4">Add a new role to the system.</p>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Enter Role Name"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/2"
        />
        <input
          type="text"
          placeholder="Enter Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/2"
        />

        <button
          onClick={handleCreateRole}
          disabled={loading}
          className={`py-2 px-4 rounded text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Creating..." : "Create"}
        </button>
      </div>

      {message && (
        <p className={`mt-2 text-center ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
          {message.text}
        </p>
      )}
    </section>
  );
};

export default CreateRoleForm;
