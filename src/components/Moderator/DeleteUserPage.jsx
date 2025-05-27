import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DeleteUserPage = () => {
  const { id: userId } = useParams(); // path param /:id
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const deleteUser = async () => {
      if (!userId) {
        setError("User ID is missing in URL");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`http://localhost:8080/api/v1/users/${userId}`, {
          method: "DELETE",
          credentials: "include",
        });

        let data;
        const contentType = res.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          data = await res.json();
        } else {
          const text = await res.text();
          data = { message: text };
        }

        console.log("Backend response:", data);

        if (!res.ok) {
          throw new Error(data.message || "Failed to delete user");
        }

        setStatus(data.message || "✅ User deleted successfully.");
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    deleteUser();
  }, [userId, navigate]);

  return (
    <div className="max-w-xl mx-auto mt-24 p-6 bg-white shadow-md rounded text-center">
      <h2 className="text-2xl font-semibold mb-4 text-red-600">Delete User</h2>

      {loading ? (
        <p className="text-gray-600">Deleting user...</p>
      ) : error ? (
        <p className="text-red-500 font-medium">{error}</p>
      ) : (
        <p className="text-green-600 font-medium">{status}</p>
      )}
    </div>
  );
};

export default DeleteUserPage;
