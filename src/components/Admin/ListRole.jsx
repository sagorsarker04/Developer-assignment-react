import React, { useEffect, useState } from "react";
import Navbar from "../Utlis/Navbar";

const RoleList = () => {
  const [roles, setRoles] = useState([]);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);

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
      } catch (err) {
        setMessage({ type: "error", text: err.message });
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  return (
    <section className="p-4 border rounded-md bg-white shadow-sm">
        <Navbar/>
        <div className="p-4 border rounded-md bg-white shadow-sm text-center">
      <h3 className="text-lg font-medium mb-2 ">List All Roles</h3>
      <p className="mb-4">View all existing roles in the system.</p>

        </div>

      {loading ? (
        <p className="text-gray-600">Loading roles...</p>
      ) : message ? (
        <p className="text-red-600">{message.text}</p>
      ) : roles.length === 0 ? (
        <p className="text-gray-500">No roles found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm">ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm">Role Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm">Description</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr key={role.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 text-sm">{role.id}</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm font-medium">{role.name}</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    {role.description || "No description"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default RoleList;
