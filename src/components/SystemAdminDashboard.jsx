import React from "react";
import AdminDashboard from "./AdminDashboard";

const SystemAdminPanel = () => {
  return (
    <div>
      {/* Include all admin features */}
      <AdminDashboard />

      {/* Extra system_admin feature */}
      <div className="mt-8 p-4 bg-purple-100 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">System Admin Exclusive</h2>

        {/* Promote to Admin */}
        <section className="p-4 border rounded-md bg-white shadow-sm">
          <h3 className="text-lg font-medium mb-2">Promote to Admin</h3>
          <p>Assign admin role to a user.</p>
        </section>
      </div>
    </div>
  );
};

export default SystemAdminPanel;
