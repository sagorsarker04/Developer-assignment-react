import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import UserProfilePage from "./components/UserProfilePage"
import UpdateProfilePage from "./components/UpdateProfilePage";
import Test from "./components/Test/Test";
import ResendVerificationPage from "./components/Utlis/ResendVerificationPage";
import AllUsers from "./components/Moderator/Allusers";
import UserDetails from "./components/User/UserDetails";
import DeleteUserPage from "./components/Moderator/DeleteUserPage";
import PromoteModerator from "./components/Admin/PromoteModerator";
import RoleList from "./components/Admin/ListRole";
import RoleDetailsPage from "./components/Admin/RoleDetailsPage";
import Logout from "./components/Utlis/logout";
import UpdateRoleForm from "./components/Admin/UpdateRoleForm";
import ConfirmReset from "./components/User/ConfirmReset";
import DeleteRoleForm from "./components/Admin/DeleteRoleForm";
import PermissionsList from "./components/Admin/PermissionList";
import GetPermissionDetails from "./components/Admin/GetPermissionDetails";
import PermissionCreate from "./components/Admin/CreatePermission";
import ResetPassword from "./components/User/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/update-profile" element={<UpdateProfilePage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/resend-verification" element={<ResendVerificationPage />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/user-details/:id" element={<UserDetails />} />
        <Route path="/delete-user/:id" element={<DeleteUserPage />} />
        <Route path="/promote-moderator/" element={<PromoteModerator />} />
        <Route path="/roles" element={<RoleList />} />
        <Route path="/role-details/:roleId" element={<RoleDetailsPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/update-role" element={<UpdateRoleForm />} />
        <Route path="/delete-role" element={<DeleteRoleForm />} />
        <Route path="/reset-password" element={<ConfirmReset />} />
        <Route path="/permissions" element={<PermissionsList />} />
        <Route path="/permission-details" element={<GetPermissionDetails/>} />
        <Route path="/permission-create" element={<PermissionCreate />} />
        <Route path="/password-reset-request" element={<ResetPassword/>} />
        

      </Routes>
    </Router>
  );
}

export default App;
