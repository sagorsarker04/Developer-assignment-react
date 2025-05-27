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
          // ধরে নিচ্ছি data.data হল ইউজারের array [{id, username}, ...]
          setUsers(data.data || []);
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

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="max-w-md mx-auto mt-12 p-4 bg-white shadow rounded">
      <h2 className="text-lg font-semibold mb-3">Delete a User</h2>

      <div className="flex items-center gap-2">
        <select
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
          className="flex-grow border border-gray-300 px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>

        <button
          onClick={handleNavigate}
          className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 whitespace-nowrap text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default GoToDeleteUserPage;
