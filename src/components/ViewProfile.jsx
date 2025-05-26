import React, { useEffect, useState } from "react";

const ViewProfile = () => {
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
      credentials: "include", // Important for sending cookies
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch user profile");
        }
        return res.json();
      })
      .then((data) => {
        setUserInfo(data.data); // adjust based on your actual API structure
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;

  if (!userInfo) return <div>Loading profile...</div>;

  return (
    <section className="p-4 border rounded-md bg-white shadow-sm">
      <h3 className="text-lg font-medium mb-2">View My Profile</h3>
      <p><strong>Username:</strong> {userInfo.username}</p>
      <p><strong>Email:</strong> {userInfo.email}</p>
      <p><strong>Role:</strong> {userInfo.type}</p>
      <p><strong>User ID:</strong> {userInfo.id}</p>
    </section>
  );
};

export default ViewProfile;
