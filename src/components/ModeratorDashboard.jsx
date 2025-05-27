import React from "react";
import UserDashboard from "./UserDashboard";
import AllUsersButton from "./Moderator/AllUserButton";
import DeleteUserSection from "./Moderator/DeleteUserButton";

const ModeratorDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* UserDashboard Features */}
      <UserDashboard />

      {/* Moderator Specific Features */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* View All Users Card */}
        <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            View All Users
          </h3>
          <p className="text-gray-600 flex-grow mb-6">
            Here you can see all registered users and delete user accounts if necessary.
          </p>
          <AllUsersButton />
        </section>

        {/* Delete User Card */}
        <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Delete User Account
          </h3>
          <DeleteUserSection />
        </section>
      </div>
    </div>
  );
};

export default ModeratorDashboard;
