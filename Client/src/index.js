import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/authContext";
import ScrollToTop from "react-scroll-to-top";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
      <ScrollToTop smooth />
    </AuthContextProvider>
  </React.StrictMode>
);
