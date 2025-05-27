import React, { useEffect, useState } from "react";
import Navbar from "./Utlis/Navbar";

const UpdateProfilePage = () => {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
        if (!res.ok) throw new Error("Failed to load user info");
        return res.json();
      })
      .then((data) => {
        const info = data.data;
        setFormData({
          username: info.username || "",
          first_name: info.first_name || "",
          last_name: info.last_name || "",
        });
        setError("");
      })
      .catch(() => {
        setError("Failed to load user info");
      });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    const auth = localStorage.getItem("auth");
    if (!auth) {
      setError("User not logged in");
      setLoading(false);
      return;
    }

    const { user } = JSON.parse(auth);

    fetch(`http://localhost:8080/api/v1/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update profile");
        return res.json();
      })
      .then(() => {
        setMessage("Profile updated successfully!");
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 border-b border-gray-200 pb-4">
          Update My Profile
        </h2>

        {error && (
          <div className="mb-6 p-3 bg-red-100 text-red-700 rounded border border-red-300">
            {error}
          </div>
        )}

        {message && (
          <div className="mb-6 p-3 bg-green-100 text-green-700 rounded border border-green-300">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block mb-2 font-medium text-gray-800">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label htmlFor="first_name" className="block mb-2 font-medium text-gray-800">
              First Name
            </label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your first name"
              required
            />
          </div>

          <div>
            <label htmlFor="last_name" className="block mb-2 font-medium text-gray-800">
              Last Name
            </label>
            <input
              id="last_name"
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your last name"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md text-white font-semibold ${
              loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default UpdateProfilePage;
