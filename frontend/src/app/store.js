// Import configureStore to create Redux store
import {configureStore} from "@reduxjs/toolkit";

// Import our API slice (where all CRUD endpoints are defined)
import { usersApi } from "../features/usersApi";

// Create and export Redux store
export const store = configureStore({
    // All reducers (state handlers) are registered here
    reducer : {
        // RTK Query generates its own reducer, we add it here
        [usersApi.reducerPath]:usersApi.reducer,
    },
    // Middleware adds extra functionality like caching, invalidation, etc.
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

// In short: This file sets up Redux store and connects RTK Query’s logic so we can make API calls easily from our React components.