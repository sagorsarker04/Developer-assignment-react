import React from "react";
import { useNavigate } from "react-router-dom";
import ModeratorDashboard from "./ModeratorDashboard";
import PromoteModerator from "./Admin/PromoteModerator";
import DemoteUser from "./Admin/DemoteUser"
import RoleList from "./Admin/ListRole";
import ViewAllRolesButton from "./Admin/ViewRolesButton";
import GetRoleDetails from "./Admin/GetRoleDetails";
import CreateRoleForm from "./Admin/CreateRoleForm";
import UpdateRole from "./Admin/UpdateRole";
import DeleteRole from "./Admin/DeleteRole";
import GetPermissionDetails from "./Admin/GetPermissionDetails";


const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Moderator features including UserDashboard */}
      <ModeratorDashboard />

      {/* Admin specific features */}
      <div className="p-4 bg-gray-100 rounded-md shadow-sm mt-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Admin Management Panel</h2>

        {/* Grid with 1 column on small screens, 2 columns on md and above */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Promote to Moderator */}
          <section className="p-4 border rounded-md bg-white shadow-sm">
            <h3 className="text-lg font-medium mb-2">Promote to Moderator</h3>
            <p>Assign moderator role to a user.</p>
            <PromoteModerator />
          </section>

          {/* Promote to Moderator */}
          <section className="p-4 border rounded-md bg-white shadow-sm">
            <h3 className="text-lg font-medium mb-2">Update any user</h3>
            <p>Update any user.</p>

          </section>


          {/* Demote to any role*/}
          <section className="p-4 border rounded-md bg-white shadow-sm">
            <h3 className="text-lg font-medium mb-2">Demote User</h3>
            <DemoteUser />
          </section>

          {/* List All Roles */}
          <section className="p-4 border rounded-md bg-white shadow-sm">
            <h3 className="text-lg font-medium mb-2">List All Roles</h3>
            <p>View all existing roles in the system.</p>
            <ViewAllRolesButton />
          </section>

          {/* Get Role Details */}
          <section className="p-4 border rounded-md bg-white shadow-sm">
            <h3 className="text-lg font-medium mb-2">Get Role Details</h3>
            <p>Retrieve detailed information about a specific role.</p>
            <GetRoleDetails />
          </section>

          {/* Create Role */}
          <section className="p-4 border rounded-md bg-white shadow-sm">
            <h3 className="text-lg font-medium mb-2">Create Role</h3>
            <p>Add a new role to the system.</p>
            <CreateRoleForm />
          </section>

          {/* Update Role */}
          <section className="p-4 border rounded-md bg-white shadow-sm">
            <h3 className="text-lg font-medium mb-2">Update Role</h3>
            <p>Modify an existing role’s details.</p>
            <UpdateRole />
          </section>

          {/* Delete Role */}
          <section className="p-4 border rounded-md bg-white shadow-sm">
            <h3 className="text-lg font-medium mb-2">Delete Role</h3>
            <p>Remove a role from the system.</p>
            <DeleteRole />
          </section>

          {/* List All Permissions */}
          <section className="p-4 border rounded-md bg-white shadow-sm">
            <h3 className="text-lg font-medium mb-2">List All Permissions</h3>
            <p>View all permissions available.</p>
            <button
              onClick={() => navigate("/permissions")}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              View All Permissions
            </button>
          </section>

          {/* Get Specific Permission Details */}
          <section className="p-4 border rounded-md bg-white shadow-sm">
            <p>View specific Permission.</p>
            <GetPermissionDetails />
          </section>

          <section className="p-4 border rounded-md bg-white shadow-sm">
            <h3 className="text-lg font-medium mb-2">Create Permisson</h3>
            
            <button
              onClick={() => navigate("/permission-create")}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Create Permission
            </button>
          </section>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
