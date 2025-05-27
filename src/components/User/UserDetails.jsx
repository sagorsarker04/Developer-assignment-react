import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`http://localhost:8080/api/v1/users/${id}`, {
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">User Details</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Verified:</strong> {user.is_verified ? "Yes" : "No"}</p>
    </div>
  );
};

export default UserDetails;
