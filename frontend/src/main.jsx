import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux"; // Provider gives Redux access to entire app
import { store } from "./app/store.js"; // Import our store

// Wrap App with Redux Provider
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
