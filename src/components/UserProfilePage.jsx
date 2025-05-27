import React, { useEffect, useState } from "react";
import Navbar from "./Utlis/Navbar";

const UserProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("auth"));
  const id = user?.user?.id;
  console.log("userid");
  console.log(id);

  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/users/${id}`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user profile");
        return res.json();
      })
      .then((data) => {
        setUserInfo(data.data);
      })
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <div className="text-red-600 p-6 font-semibold">{error}</div>;
  if (!userInfo) return <div className="p-6 text-gray-600">Loading...</div>;

  // Format dates nicely (optional)
  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const d = new Date(dateStr);
    return d.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-xl mx-auto p-8 mt-10 bg-white rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 border-b border-gray-200 pb-4">
          {userInfo.username}'s Profile
        </h2>
        <div className="space-y-6 text-gray-700 text-lg">
          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-900 w-36">Username:</span>
            <span>{userInfo.username}</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-900 w-36">Email:</span>
            <span>{userInfo.email}</span>
            {userInfo.email_verified && (
              <span
                title="Email Verified"
                className="ml-2 text-green-600 font-bold select-none"
                aria-label="verified"
              >
                ✔
              </span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-900 w-36">First Name:</span>
            <span>{userInfo.first_name || "N/A"}</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-900 w-36">Last Name:</span>
            <span>{userInfo.last_name || "N/A"}</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-900 w-36">Role:</span>
            <span className="capitalize">{userInfo.user_type}</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-900 w-36">User ID:</span>
            <span>{userInfo.id}</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-900 w-36">Created At:</span>
            <span>{formatDate(userInfo.created_at)}</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-900 w-36">Updated At:</span>
            <span>{formatDate(userInfo.updated_at)}</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfilePage;
