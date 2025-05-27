import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import ModeratorDashboard from "./ModeratorDashboard";
import AdminDashboard from "./AdminDashboard";
import SystemAdminDashboard from "./SystemAdminDashboard";
import Navbar from "./Utlis/Navbar";

<Navbar/>

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("auth");
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed.user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      {/* Navbar with logout button */}
      <Navbar onLogout={handleLogout} />

      {/* Main content */}
      <div className="p-6 max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Welcome, {user.username}!</h1>
          <p className="mt-1">Role: {user.type}</p>
        </div>

        {/* Role based dashboards */}
        {user.type === "system_admin" && (
          <div className="mb-4 p-4 bg-blue-100 rounded-md">
            <SystemAdminDashboard />
          </div>
        )}

        {user.type === "admin" && (
          <div className="mb-4 p-4 bg-green-100 rounded-md">
            <AdminDashboard />
          </div>
        )}

        {user.type === "moderator" && (
          <div className="mb-4 p-4 bg-yellow-100 rounded-md">
            <ModeratorDashboard />
          </div>
        )}

        {user.type === "user" && (
          <div className="mb-4 p-4 bg-gray-100 rounded-md">
            <UserDashboard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
