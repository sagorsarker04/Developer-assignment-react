import React from "react";
import AdminDashboard from "./AdminDashboard";
import PromoteAdmin from "./System Admin/PromoteToAdmin";

const SystemAdminPanel = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Admin + Moderator + User Dashboards */}
      <AdminDashboard />

      {/* System Admin Exclusive Section */}
      <section className="max-w-7xl mx-auto mt-12 p-6 bg-purple-50 border border-purple-300 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-purple-700 mb-4">
          System Admin Exclusive Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Promote to Admin */}
          <article className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">
              Promote User to Admin
            </h3>
            <p className="text-gray-600 mb-5">
              Assign the admin role to a user, granting elevated permissions.
            </p>
            <PromoteAdmin />
          </article>
          {/* You can add more System Admin exclusive features here */}
        </div>
      </section>
    </div>
  );
};

export default SystemAdminPanel;
