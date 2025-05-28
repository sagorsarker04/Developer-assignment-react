import React, { useEffect, useState } from "react";

const GetPermissionDetails = () => {
  const [permissions, setPermissions] = useState([]);
  const [selectedPermissionId, setSelectedPermissionId] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/v1/permissions", {
          credentials: "include",
        });
        if (!res.ok) throw new Error("Failed to fetch permissions");
        const data = await res.json();
        setPermissions(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPermissions();
  }, []);

  const selectedPermission = permissions.find(
    (perm) => perm.id === selectedPermissionId
  );

  return (
    <section className="p-6 border rounded-md bg-white shadow-sm max-w-3xl mx-auto">
      <h3 className="text-lg font-medium mb-2">Get Permission Details</h3>
      <p className="mb-4 text-gray-600">
        Retrieve details of a specific permission.
      </p>

      {loading && <p>Loading permissions...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {!loading && !error && (
        <>
          <select
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedPermissionId}
            onChange={(e) => setSelectedPermissionId(e.target.value)}
          >
            <option value="" disabled>
              -- Select a permission --
            </option>
            {permissions.map((perm) => (
              <option key={perm.id} value={perm.id}>
                {perm.name}
              </option>
            ))}
          </select>

          {selectedPermission ? (
            <div className="bg-gray-50 p-4 rounded-md border border-gray-300">
              <h4 className="text-xl font-semibold mb-2">{selectedPermission.name}</h4>
              <p>
                <strong>Description:</strong>{" "}
                {selectedPermission.description || "No description"}
              </p>
              <p>
                <strong>Resource:</strong> {selectedPermission.resource}
              </p>
              <p>
                <strong>Action:</strong> {selectedPermission.action}
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {new Date(selectedPermission.created_at).toLocaleString()}
              </p>
              <p>
                <strong>Updated At:</strong>{" "}
                {new Date(selectedPermission.updated_at).toLocaleString()}
              </p>
            </div>
          ) : (
            <p className="text-gray-500">Please select a permission to see details.</p>
          )}
        </>
      )}
    </section>
  );
};

export default GetPermissionDetails;
