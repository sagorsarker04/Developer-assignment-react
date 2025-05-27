import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const UpdateRolePage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roleId = queryParams.get("role_id");

  const [roleInfo, setRoleInfo] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // Fetch role info by ID
  useEffect(() => {
    const fetchRole = async () => {
      if (!roleId) return;

      try {
        const res = await fetch(`http://localhost:8080/api/v1/roles/${roleId}`, {
          credentials: "include",
        });

        const data = await res.json();
        if (res.ok) {
          setRoleInfo({
            name: data.data.name || "",
            description: data.data.description || "",
          });
        } else {
          throw new Error(data.message || "Failed to fetch role");
        }
      } catch (error) {
        setMessage({ type: "error", text: error.message });
      }
    };

    fetchRole();
  }, [roleId]);

  // Handle update submit
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch(`http://localhost:8080/api/v1/roles/${roleId}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(roleInfo),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage({ type: "success", text: "Role updated successfully!" });
      } else {
        throw new Error(data.message || "Failed to update role");
      }
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold text-center mb-4">Update Role</h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block font-medium">Role Name</label>
          <input
            type="text"
            value={roleInfo.name}
            onChange={(e) => setRoleInfo({ ...roleInfo, name: e.target.value })}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            value={roleInfo.description}
            onChange={(e) => setRoleInfo({ ...roleInfo, description: e.target.value })}
            className="w-full border px-3 py-2 rounded"
            rows={3}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white font-semibold ${
            loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Updating..." : "Update Role"}
        </button>

        {message && (
          <p
            className={`text-center ${
              message.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message.text}
          </p>
        )}
      </form>
    </section>
  );
};

export default UpdateRolePage;
