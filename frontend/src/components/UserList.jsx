import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../features/usersApi";

const UserList = ({ onSelect, onEdit }) => {
  // Hook for fetching all users from backend
  const { data : users = [], isLoading } = useGetUsersQuery();

  // Hook for deleting a user
  const [deleteUser] = useDeleteUserMutation();

  // If data is still loading
  if (isLoading) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-4">
      {/* Section Title */}
      <h1 className="text-2xl font-bold mb-4">{users.length == 0 ? 'create Users' : 'All Users'}</h1>

      {/* List of users */}
      <div className="space-y-3">
        {users.map((user) => (
          <div
            key={user._id}
            className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
          >
            {/* Left section: user info */}
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>

            {/* Right section: Action buttons */}
            <div className="flex gap-2">
              {/* Read details */}
              <button
                onClick={() => onSelect(user._id)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Read
              </button>

              {/* Edit user */}
              <button
                onClick={() => onEdit(user)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              {/* Delete user */}
              <button
                onClick={() => deleteUser(user._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
