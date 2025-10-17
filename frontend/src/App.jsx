import React, { useState } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UseForm";
import UserDetails from "./components/UserDetails";

const App = () => {
  // State for tracking which user is selected for "Read"
  const [selectedId, setSelectedId] = useState(null);

  // State for tracking which user is selected for "Edit"
  const [editUser, setEditUser] = useState(null);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">User Management</h1>
      </div>

      {/* Form (for both Add and Edit) */}
      <UserForm
        editUser={editUser}
        onSuccess={() => {
          setSelectedId(null);
          setEditUser(null);
        }}
      />

      {/* List of all users */}
      <UserList onSelect={setSelectedId} onEdit={setEditUser} />

      {/* Display single user details */}
      <UserDetails userId={selectedId} />
    </div>
  );
};

export default App;
