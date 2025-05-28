import React, { useEffect, useState } from "react";

const PermissionsList = () => {
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/permissions", {
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch permissions");
        }
        const data = await response.json();
        setPermissions(data.data || []);  // data.data as per backend response
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPermissions();
  }, []);

  if (loading) return <p>Loading permissions...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow rounded mt-8 overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-6">All Permissions</h2>
      {permissions.length === 0 ? (
        <p>No permissions found.</p>
      ) : (
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Resource</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Created At</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Updated At</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((perm) => (
              <tr key={perm.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{perm.id}</td>
                <td className="border border-gray-300 px-4 py-2">{perm.name}</td>
                <td className="border border-gray-300 px-4 py-2">{perm.description || "No description"}</td>
                <td className="border border-gray-300 px-4 py-2">{perm.resource}</td>
                <td className="border border-gray-300 px-4 py-2">{perm.action}</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(perm.created_at).toLocaleString()}</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(perm.updated_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PermissionsList;
