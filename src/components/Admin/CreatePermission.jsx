import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PermissionCreate = () => {

    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    resource: "",
    action: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMsg(null);

    try {
      const res = await fetch("http://localhost:8080/api/v1/permissions/create", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to create permission");
      }

      setSuccessMsg("Permission created successfully!");
      setFormData({
        name: "",
        description: "",
        resource: "",
        action: "",
      });

      setTimeout(()=> navigate('/dashboard'),2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-8">
      <h2 className="text-2xl font-semibold mb-4">Create Permission</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1" htmlFor="name">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Permission name"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Description (optional)"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="resource">
            Resource <span className="text-red-500">*</span>
          </label>
          <input
            id="resource"
            name="resource"
            value={formData.resource}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Resource (e.g. user, post)"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="action">
            Action <span className="text-red-500">*</span>
          </label>
          <input
            id="action"
            name="action"
            value={formData.action}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Action (e.g. create, read, update)"
          />
        </div>

        {error && <p className="text-red-600">{error}</p>}
        {successMsg && <p className="text-green-600">{successMsg}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          } transition`}
        >
          {loading ? "Creating..." : "Create Permission"}
        </button>
      </form>
    </div>
  );
};

export default PermissionCreate;
