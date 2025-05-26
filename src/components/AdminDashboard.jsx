import React from "react";
import ModeratorDashboard from "./ModeratorDashboard";

const AdminDashboard = () => {
  return (
    <div>
      {/* Moderator features including UserDashboard */}
      <ModeratorDashboard />

      {/* Admin specific features */}
      <div className="space-y-6 p-4 bg-gray-100 rounded-md shadow-sm mt-8">
        <h2 className="text-2xl font-semibold mb-6">Admin Management Panel</h2>

        {/* Promote to Moderator */}
        <section className="p-4 border rounded-md bg-white shadow-sm">
          <h3 className="text-lg font-medium mb-2">Promote to Moderator</h3>
          <p>Assign moderator role to a user.</p>
        </section>

        {/* Demote Moderator */}
        <section className="p-4 border rounded-md bg-white shadow-sm">
          <h3 className="text-lg font-medium mb-2">Demote Moderator</h3>
          <p>Remove moderator role from a user.</p>
        </section>

        {/* List All Roles */}
        <section className="p-4 border rounded-md bg-white shadow-sm">
          <h3 className="text-lg font-medium mb-2">List All Roles</h3>
          <p>View all existing roles in the system.</p>
        </section>

        {/* Get Role Details */}
        <section className="p-4 border rounded-md bg-white shadow-sm">
          <h3 className="text-lg font-medium mb-2">Get Role Details</h3>
          <p>Retrieve detailed information about a specific role.</p>
        </section>

        {/* Create Role */}
        <section className="p-4 border rounded-md bg-white shadow-sm">
          <h3 className="text-lg font-medium mb-2">Create Role</h3>
          <p>Add a new role to the system.</p>
        </section>

        {/* Update Role */}
        <section className="p-4 border rounded-md bg-white shadow-sm">
          <h3 className="text-lg font-medium mb-2">Update Role</h3>
          <p>Modify an existing role’s details.</p>
        </section>

        {/* Delete Role */}
        <section className="p-4 border rounded-md bg-white shadow-sm">
          <h3 className="text-lg font-medium mb-2">Delete Role</h3>
          <p>Remove a role from the system.</p>
        </section>

        {/* List All Permissions */}
        <section className="p-4 border rounded-md bg-white shadow-sm">
          <h3 className="text-lg font-medium mb-2">List All Permissions</h3>
          <p>View all permissions available.</p>
        </section>

        {/* Get Specific Permission Details */}
        <section className="p-4 border rounded-md bg-white shadow-sm">
          <h3 className="text-lg font-medium mb-2">Get Permission Details</h3>
          <p>Retrieve details of a specific permission.</p>
        </section>

        {/* Create Permission */}
        <section className="p-4 border rounded-md bg-white shadow-sm">
          <h3 className="text-lg font-medium mb-2">Create Permission</h3>
          <p>Add a new permission to the system.</p>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
