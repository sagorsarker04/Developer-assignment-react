import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Utlis/Navbar";

const RoleDetailsPage = () => {
  const { roleId } = useParams();
  const [roleDetails, setRoleDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchRoleDetails = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/v1/roles/${roleId}`, {
          credentials: "include",
        });
        const data = await res.json();

        if (res.ok) {
          setRoleDetails(data.data);
          setMessage(null);
        } else {
          setMessage(data.message || "Failed to fetch role details");
        }
      } catch (err) {
        setMessage("Something went wrong while fetching role details.");
      } finally {
        setLoading(false);
      }
    };

    fetchRoleDetails();
  }, [roleId]);

  if (loading) {
    return <p className="text-center mt-6">Loading...</p>;
  }

  return (
    <div>
        <Navbar/>
         <section className="p-4 border rounded-md bg-white shadow-sm max-w-xl mx-auto mt-6">
        
      <h3 className="text-lg font-medium mb-2">Role Details</h3>

      {message && <p className="mb-4 text-red-600">{message}</p>}

      {roleDetails ? (
        <div className="text-left border-t pt-4">
          <p><strong>ID:</strong> {roleDetails.id}</p>
          <p><strong>Name:</strong> {roleDetails.name}</p>
          <p><strong>Description:</strong> {roleDetails.description || "No description available."}</p>
        </div>
      ) : (
        <p>No role details available.</p>
      )}
    </section>
    </div>
     
  );
};

export default RoleDetailsPage;
