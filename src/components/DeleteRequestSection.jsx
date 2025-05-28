import React, { useState } from "react";

const DeleteRequestButton = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleDeleteRequest = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (!auth || !auth.user?.id) {
      setError("User not logged in");
      return;
    }

    fetch(`http://localhost:8080/api/v1/users/${auth.user.id}`, {
      method: "POST",
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
      .catch(() => {
        setError("Something went wrong");
        setShowConfirm(false);
      });
  };

  return (
    <div>
      {message && <p className="text-green-600 mb-2">{message}</p>}
      {error && <p className="text-red-600 mb-2">{error}</p>}

      {!showConfirm ? (
        <button
          onClick={() => setShowConfirm(true)}
          className="w-full py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Request Delete
        </button>
      ) : (
        <div className="mt-4 bg-gray-100 p-4 rounded border">
          <p className="mb-2 font-medium text-red-700">
            Are you sure you want to request account deletion?
          </p>
          <div className="flex justify-between gap-3">
            <button
              onClick={handleDeleteRequest}
              className="flex-1 py-2 px-4 bg-red-700 text-white rounded hover:bg-red-800 transition"
            >
              Confirm
            </button>
            <button
              onClick={() => setShowConfirm(false)}
              className="flex-1 py-2 px-4 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteRequestButton;
