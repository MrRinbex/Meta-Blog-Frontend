import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/authContext";
import ScrollToTop from "react-scroll-to-top";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
        <ScrollToTop smooth />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
