import React from "react";
import UserDashboard from "./UserDashboard";
import AllUsersButton from "./Moderator/AllUserButton";
import DeleteUserSection from "./Moderator/DeleteUserButton";

const ModeratorDashboard = () => {
  return (
    <section className="max-w-7xl mx-auto mt-8 space-y-10">
      {/* User Dashboard Section */}
      <UserDashboard />

      {/* Moderator Exclusive Features */}
      <section className="bg-gray-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Moderator Controls
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* View All Users */}
          <article className="bg-white p-6 rounded-lg shadow-sm flex flex-col">
            <h3 className="text-xl font-medium mb-3 text-gray-900">View All Users</h3>
            <p className="text-gray-700 mb-4 flex-grow">
              Browse and manage the accounts of all users.
            </p>
            <AllUsersButton />
          </article>

          {/* Delete User */}
          <article className="bg-white p-6 rounded-lg shadow-sm flex flex-col">
            <h3 className="text-xl font-medium mb-3 text-gray-900">Delete User Account</h3>
            <DeleteUserSection />
          </article>
        </div>
      </section>
    </section>
  );
};

export default ModeratorDashboard;
