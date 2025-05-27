import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const DeleteRoleForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roleId = queryParams.get("role_id");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleDelete = async () => {
    if (!roleId) {
      setMessage({ type: "error", text: "No role ID specified in URL." });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch(`http://localhost:8080/api/v1/roles/${roleId}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: data.message || "Role deleted successfully." });
      } else {
        setMessage({ type: "error", text: data.message || "Failed to delete role." });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Something went wrong during deletion." });
    } finally {
      setLoading(false);
    }
  };

  if (!roleId) {
    return (
      <section className="p-4 border rounded-md bg-white shadow-sm max-w-md mx-auto mt-6">
        <h3 className="text-lg font-medium mb-2">Delete Role</h3>
        <p className="text-red-600">No role ID specified in the URL.</p>
      </section>
    );
  }

  return (
    <section className="p-4 border rounded-md bg-white shadow-sm max-w-md mx-auto mt-6">
      <h3 className="text-lg font-medium mb-2">Delete Role</h3>
      <p>Are you sure you want to delete role?</p>

      <button
        onClick={handleDelete}
        disabled={loading}
        className={`mt-4 w-full py-2 rounded text-white ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
        }`}
      >
        {loading ? "Deleting..." : "Delete Role"}
      </button>

      {message && (
        <p
          className={`mt-4 text-center ${
            message.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message.text}
        </p>
      )}
    </section>
  );
};

export default DeleteRoleForm;
