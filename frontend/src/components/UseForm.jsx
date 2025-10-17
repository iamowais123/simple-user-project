import React, { useState, useEffect } from "react";
import {
  useCreateUserMutation,
  useUpdateUserMutation,
} from "../features/usersApi";

const UserForm = ({ editUser, onSuccess }) => {
  // Local state for form inputs
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  // RTK Query hooks for create and update operations
  const [createUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();

  // When editUser prop changes, prefill form with existing user data
  useEffect(() => {
    if (editUser) setForm(editUser);
  }, [editUser]);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    if (editUser) {
      // if editing existing user
      await updateUser(form);
    } else {
      // if creating new user
      await createUser(form);
    }

    // reset form after submit
    setForm({ name: "", email: "", age: "" });

    // trigger parent callback to refresh UI
    onSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-gray-50 rounded-lg shadow-md space-y-3"
    >
      <input
        type="text"
        placeholder="Name"
        className="border p-2 w-full rounded"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full rounded"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="number"
        placeholder="Age"
        className="border p-2 w-full rounded"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />

      <button
        className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700"
        type="submit"
      >
        {editUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default UserForm;
