import React from "react";
import ViewProfileButton from "./ViewProfileButton";
import SelfUpdateButton from "./SelfUpdateButton";
import DeleteRequestSection from "./DeleteRequestSection";
import ResetPassword from "./User/ResetPassword";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto p-8 mt-10 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">User Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* View Profile */}
        <div className="bg-gray-50 p-6 rounded-xl shadow flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">View My Profile</h3>
          <p className="text-gray-600 mb-6">See your profile information in detail.</p>
          <div>
            <ViewProfileButton />
          </div>
        </div>

        {/* Self Update */}
        <div className="bg-gray-50 p-6 rounded-xl shadow flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Update My Info</h3>
          <p className="text-gray-600 mb-6">Edit your personal information securely.</p>
          <div>
            <SelfUpdateButton />
          </div>
        </div>

        {/* Request Account Deletion */}
        <div className="bg-gray-50 p-6 rounded-xl shadow flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Request Account Deletion</h3>
          <p className="text-gray-600 mb-6">Submit a request for account deletion.</p>
          <div>
            <DeleteRequestSection />
          </div>
        </div>

        {/* Password Reset */}
        <div className="bg-gray-50 p-6 rounded-xl shadow flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Reset Password</h3>
          <p className="text-gray-600 mb-6">Change your password securely.</p>
          <button
            onClick={() => navigate("/password-reset-request")}
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
          >
            Reset Password
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
