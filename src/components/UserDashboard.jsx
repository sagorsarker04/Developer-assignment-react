import React from "react";
import ViewProfileButton from './ViewProfileButton'
import SelfUpdateButton from "./SelfUpdateButton";
import DeleteRequestSection from "./DeleteRequestSection";
const UserDashboard = () => {
  return (
    <div className="space-y-6 p-4 bg-gray-50 rounded-md shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

      {/* View My Profile */}
      <ViewProfileButton/>

      {/* Self Update */}
      <SelfUpdateButton />

      {/* Delete Request */}
      <DeleteRequestSection />
      {/* Password Reset */}
      <section className="p-4 border rounded-md bg-white shadow-sm">
        <h3 className="text-lg font-medium mb-2">Password Reset</h3>
        <p>Change your password securely.</p>
      </section>

      {/* Resend Verification */}
      <section className="p-4 border rounded-md bg-white shadow-sm">
        <h3 className="text-lg font-medium mb-2">Resend Verification</h3>
        <p>Resend your email verification link if you didn’t receive it.</p>
      </section>
    </div>
  );
};

export default UserDashboard;
