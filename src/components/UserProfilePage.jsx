import React, { useEffect, useState } from "react";

const UserProfilePage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      setError("User not logged in");
      return;
    }

    const { user } = JSON.parse(auth);

    fetch(`http://localhost:8080/api/v1/users/${user.id}`, {
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
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!userInfo) return <div>Loading...</div>;
  console.log(userInfo);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <p><strong>Username:</strong> {userInfo.username}</p>
      <p><strong>Email:</strong> {userInfo.email}</p>
      <p><strong>Role:</strong> {userInfo.user_type}</p>
      <p><strong>User ID:</strong> {userInfo.id}</p>
    </div>
  );
};

export default UserProfilePage;
