import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/v1/users", {
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await res.json();
        setUsers(data.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">All Users</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Username</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">First Name</th>
              <th className="p-3 border">Last Name</th>
              <th className="p-3 border">User Type</th>
              <th className="p-3 border">Verified</th>
              <th className="p-3 border">Created At</th>
              <th className="p-3 border">Updated At</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 text-center">
                  <td className="p-3 border">{user.username}</td>
                  <td className="p-3 border">{user.email}</td>
                  <td className="p-3 border">{user.first_name}</td>
                  <td className="p-3 border">{user.last_name}</td>
                  <td className="p-3 border capitalize">{user.user_type}</td>
                  <td className="p-3 border">
                    {user.email_verified ? (
                      <span className="text-green-600 font-semibold">Yes</span>
                    ) : (
                      <span className="text-red-600 font-semibold">No</span>
                    )}
                  </td>
                  <td className="p-3 border text-sm text-gray-600">
                    {new Date(user.created_at).toLocaleString()}
                  </td>
                  <td className="p-3 border text-sm text-gray-600">
                    {new Date(user.updated_at).toLocaleString()}
                  </td>
                  <td className="p-3 border">
                    
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center p-4">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
