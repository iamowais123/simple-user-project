// Import RTK Query functions

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create a new API slice using createApi
export const usersApi = createApi({
  reducerPath: "usersApi", // unique name for this API slice
  // baseQuery means all requests will use this base URL
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  // tagTypes are used to refetch (invalidate) data after mutation (create/update/delete)
  tagTypes: ["User"],
  // Define all API endpoints here
  endpoints: (builder) => ({
    // ----------- READ: Get all users -----------

    getUsers: builder.query({
      query: () => "users", // GET /api/users
      providesTags: ["User"], // Tells RTK to cache this data
    }),

    // ----------- READ ONE: Get single user -----------
    getUser: builder.query({
      query: (id) => `users/${id}`, // GET /api/users/:id
    }),

    // ----------- CREATE: Add new user -----------

    createUser: builder.mutation({
      query: (newUser) => ({
        url: "users", // POST /api/users
        method: "POST",
        body: newUser, // data sent from form
      }),
      invalidatesTags: ["User"], // re-fetch users list automatically
    }),

    // ----------- UPDATE: Edit existing user -----------

    updateUser: builder.mutation({
      query: ({ _id, ...body }) => ({
        url: `users/${_id}`, // PUT /api/users/:id
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"], // refresh list
    }),

    // ----------- DELETE: Remove user -----------

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`, // DELETE /api/users/:id
        method: "DELETE",
      }),
      invalidatesTags: ["User"], // refresh list after deletion
    }),
  }),
});

// Export hooks that RTK Query automatically creates for each endpoint
export const {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;

// In short: This file contains all API functions (GET, POST, PUT, DELETE) — no need for Axios manually! RTK Query creates automatic hooks like useGetUsersQuery, useCreateUserMutation, etc.