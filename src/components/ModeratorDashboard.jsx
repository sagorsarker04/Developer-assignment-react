import React from "react";
import UserDashboard from "./UserDashboard";

const ModeratorDashboard = () => {
  return (
    <div>
      {/* UserDashboard Features */}
      <UserDashboard />

      {/* Moderator Specific Features */}
      <div className="space-y-6 p-4 bg-gray-50 rounded-md shadow-sm mt-8">

        {/* See Any Specific User */}
        <section className="p-4 border rounded-md bg-white shadow-sm">
          <h3 className="text-lg font-medium mb-2">See Any Specific User</h3>
          <p>Search and view details of any user in the system.</p>
        </section>

        {/* Delete Any User */}
        <section className="p-4 border rounded-md bg-white shadow-sm">
          <h3 className="text-lg font-medium mb-2">Delete Any User</h3>
          <p>Delete user accounts if necessary.</p>
        </section>
      </div>
    </div>
  );
};

export default ModeratorDashboard;
