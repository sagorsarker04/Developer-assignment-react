import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import UserProfilePage from "./components/UserProfilePage"
import UpdateProfilePage from "./components/UpdateProfilePage";
import Test from "./components/Test/Test";

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
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </Router>
  );
}

export default App;
