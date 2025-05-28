import React from "react";
import { useNavigate } from "react-router-dom";
import ModeratorDashboard from "./ModeratorDashboard";
import PromoteModerator from "./Admin/PromoteModerator";
import DemoteUser from "./Admin/DemoteUser";
import ViewAllRolesButton from "./Admin/ViewRolesButton";
import GetRoleDetails from "./Admin/GetRoleDetails";
import CreateRoleForm from "./Admin/CreateRoleForm";
import UpdateRole from "./Admin/UpdateRole";
import DeleteRole from "./Admin/DeleteRole";
import GetPermissionDetails from "./Admin/GetPermissionDetails";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto mt-10">
      {/* Include Moderator + User Dashboards */}
      <ModeratorDashboard />

      {/* Admin Management Panel */}
      <section className="mt-10 bg-gray-100 p-8 rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Admin Management Panel</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Promote to Moderator */}
          <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Promote to Moderator</h3>
            <p className="mb-4 text-gray-600">Assign moderator role to a user.</p>
            <PromoteModerator />
          </article>

          {/* Update any user (empty placeholder for now) */}
          <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Update any user</h3>
            <p className="mb-4 text-gray-600">Update any user.</p>
          </article>

           {/* List All Permissions */}
          <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">List All Permissions</h3>
            <p className="mb-4 text-gray-600">View all permissions available.</p>
            <button
              onClick={() => navigate("/permissions")}
              className="mt-auto px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded transition"
            >
              View All Permissions
            </button>
          </article>

         

          {/* List All Roles */}
          <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">List All Roles</h3>
            <p className="mb-10 text-gray-600">View all existing roles in the system.</p>
            <ViewAllRolesButton />
          </article>

          {/* Get Role Details */}
          <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Get Role Details</h3>
            <p className="mb-1 text-gray-600">Retrieve detailed information about a specific role.</p>
            <GetRoleDetails />
          </article>

          {/* Create Role */}
          <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Create Role</h3>
            <p className="mb-6 text-gray-600">Add a new role to the system.</p>
           
            <CreateRoleForm />
          </article>

          {/* Update Role */}
          <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Update Role</h3>
            <p className="mb-2 text-gray-600">Modify an existing role’s details.</p>
            <UpdateRole />
          </article>

          {/* Delete Role */}
          <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900">Delete Role</h3>
            <p className="mb-2 text-gray-600">Remove a role from the system.</p>
            <DeleteRole />
          </article>

          {/* Demote User */}
          <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Demote User</h3>
            <DemoteUser />
          </article>

          {/* Get Specific Permission Details */}
          <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Get Permission Details</h3>
            <GetPermissionDetails />
          </article>

          {/* Create Permission */}
          <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Create Permission</h3>
            <button
              onClick={() => navigate("/permission-create")}
              className="mt-auto px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded transition"
            >
              Create Permission
            </button>
          </article>
        </div>
      </section>
    </section>
  );
};

export default AdminDashboard;
