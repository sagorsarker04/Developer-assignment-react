import React from "react";
import AdminDashboard from "./AdminDashboard";
import PromoteAdmin from "./System Admin/PromoteToAdmin";

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
            <h3 className="text-lg font-medium mb-2">Promote to Moderator</h3>
            <p>Assign moderator role to a user.</p>
            <PromoteAdmin/>
          </section>
      </div>
    </div>
  );
};

export default SystemAdminPanel;
