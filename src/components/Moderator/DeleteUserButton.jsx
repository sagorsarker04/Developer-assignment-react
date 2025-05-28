import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GoToDeleteUserPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/v1/users", {
          credentials: "include",
        });
        const data = await res.json();

        if (res.ok) {
          setUsers(data.data ?? []);
        } else {
          throw new Error(data.message || "Failed to fetch users");
        }
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleNavigate = () => {
    if (!selectedUserId) {
      alert("Please select a user");
      return;
    }
    navigate(`/delete-user/${selectedUserId}`);
  };

  if (loading)
    return (
      <section className="max-w-7xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <p className="text-gray-600">Loading users...</p>
      </section>
    );

  if (error)
    return (
      <section className="max-w-7xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <p className="text-red-600">Error: {error}</p>
      </section>
    );

  return (
    <section className="max-w-7xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Delete a User</h2>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <select
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
          className="flex-grow border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="">Select User</option>
          {users.map(({ id, username }) => (
            <option key={id} value={id}>
              {username}
            </option>
          ))}
        </select>

        <button
          onClick={handleNavigate}
          className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition-colors text-sm whitespace-nowrap"
        >
          Delete
        </button>
      </div>
    </section>
  );
};

export default GoToDeleteUserPage;
