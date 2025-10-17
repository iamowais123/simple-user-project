import React from "react";
import { useGetUserQuery } from "../features/usersApi";

const UserDetails = ({ userId }) => {
  // Fetch single user based on ID (skip request if no ID)
  const { data: user, isLoading } = useGetUserQuery(userId, {
    skip: !userId,
  });

  // if no user selected, show nothing
  if (!userId) return null;

  // while loading
  if (isLoading) return <p className="text-center">Loading details...</p>;

  return (
    <div className="p-4 bg-gray-100 mt-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Age:</strong> {user.age}</p>
    </div>
  );
};

export default UserDetails;
