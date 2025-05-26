import React, { useState } from "react";

const DeleteRequestSection = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleDeleteRequest = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    console.log(auth.user.id)
    if (!auth || !auth.user.id) {
      setError("User not logged in");
      return;
    }

    fetch(`http://localhost:8080/api/v1/users/${auth.user.id}`, {
      method: "POST", // or PUT if that's what your backend expects
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => {
        setMessage(data.message || "Request submitted");
        setShowConfirm(false);
      })
      .catch((err) => {
        setError("Something went wrong");
        setShowConfirm(false);
      });
  };

  return (
    <section className="p-4 border rounded-md bg-white shadow-sm">
      <h3 className="text-lg font-medium mb-2">Delete Request</h3>
      <p className="mb-2">Request account deletion. This will require admin approval.</p>

      {message && <p className="text-green-600">{message}</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!showConfirm ? (
        <button
          onClick={() => setShowConfirm(true)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Request Delete
        </button>
      ) : (
        <div className="mt-4 bg-gray-50 p-4 rounded border">
          <p className="mb-2 font-medium text-red-600">
            Are you sure you want to request account deletion?
          </p>
          <div className="flex space-x-2">
            <button
              onClick={handleDeleteRequest}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Confirm
            </button>
            <button
              onClick={() => setShowConfirm(false)}
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DeleteRequestSection;
