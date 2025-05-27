import React from "react";
import ViewProfileButton from './ViewProfileButton';
import SelfUpdateButton from "./SelfUpdateButton";
import DeleteRequestSection from "./DeleteRequestSection";

const UserDashboard = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-md shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

      {/* Grid container with 2 columns and gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* View My Profile */}
        <div className="bg-white p-4 rounded-md shadow-sm">
          <ViewProfileButton />
        </div>

        {/* Self Update */}
        <div className="bg-white p-4 rounded-md shadow-sm">
          <SelfUpdateButton />
        </div>

        {/* Delete Request */}
        <div className="bg-white p-4 rounded-md shadow-sm">
          <DeleteRequestSection />
        </div>

        {/* Password Reset */}
        <section className="p-4 border rounded-md bg-white shadow-sm">
          <h3 className="text-lg font-medium mb-2">Password Reset</h3>
          <p>Change your password securely.</p>
        </section>
      </div>
    </div>
  );
};

export default UserDashboard;
