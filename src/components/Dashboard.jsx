import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import ModeratorDashboard from "./ModeratorDashboard";
import AdminDashboard from "./AdminDashboard";
import SystemAdminDashboard from "./SystemAdminDashboard";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("auth");
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed.user); // access user from auth object
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Welcome, {user.username}!</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>

      <p className="mb-4">Role: {user.type}</p>

      {/* System Admin Access */}
      {user.type === "system_admin" && (
        <div className="mb-4 p-4 bg-blue-100 rounded-md">
          <SystemAdminDashboard/>
        </div>
      )}

      {/* Admin Access */}
      {user.type === "admin" && (
        <div className="mb-4 p-4 bg-green-100 rounded-md">
          <AdminDashboard/>
        </div>
      )}

      {/* Moderator Access */}
      {user.type === "moderator" && (
        <div className="mb-4 p-4 bg-yellow-100 rounded-md">
          <ModeratorDashboard/>
        </div>
      )}

      {/* Normal User Access */}
      {user.type === "user" && (
        <div className="mb-4 p-4 bg-gray-100 rounded-md">
          <UserDashboard/>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
