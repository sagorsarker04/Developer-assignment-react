import React, { useEffect, useState } from "react";

const GetPermissionDetails = () => {
  const [permissions, setPermissions] = useState([]);
  const [selectedPermissionId, setSelectedPermissionId] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/v1/permissions", {
          credentials: "include",
        });

        const data = await res.json();
        if (res.ok) {
          setPermissions(Array.isArray(data.data) ? data.data : []);
        } else {
          throw new Error(data.message || "Failed to fetch permissions.");
        }
      } catch (err) {
        setMessage({ type: "error", text: err.message });
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
    <section className="p-6 max-w-3xl mx-auto mt-6 bg-white rounded-xl shadow-md space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-center">Permission Details</h2>
        <p className="text-center text-sm text-gray-600">
          Select a permission from the list to view its details.
        </p>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading permissions...</p>
      ) : message ? (
        <p className="text-center text-red-600">{message.text}</p>
      ) : (
        <>
          <select
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedPermissionId}
            onChange={(e) => setSelectedPermissionId(e.target.value)}
          >
            <option value="">-- Select a permission --</option>
            {permissions.map((perm) => (
              <option key={perm.id} value={perm.id}>
                {perm.name}
              </option>
            ))}
          </select>

          {selectedPermission ? (
            <div className="bg-gray-50 p-5 rounded-lg border space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {selectedPermission.name}
              </h3>
              <p>
                <strong>Description:</strong>{" "}
                {selectedPermission.description || "No description provided"}
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
            <p className="text-center text-gray-500">
              Please select a permission to see details.
            </p>
          )}
        </>
      )}
    </section>
  );
};

export default GetPermissionDetails;
