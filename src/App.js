import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Profile from "./pages/Profile";
import ProfileEdite from "./pages/ProfileEdite";
import Page404 from "./pages/Page404";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopAut from "./components/ScrollToTopAut";
import React, { useState } from "react";
import "./style.scss";
import { AnimatePresence } from "framer-motion";
import EntrancePage from "./pages/EntrancePage";

function App() {
  const [entrancePage, setEntrancePage] = useState(true);
  const location = useLocation();

  setTimeout(() => {
    setEntrancePage(false);
  }, 3500);

  return entrancePage ? (
    <EntrancePage />
  ) : (
    <div className="app">
      <AnimatePresence mode="wait">
        <div className="container">
          <ScrollToTopAut />
          <Navbar />
          <Routes key={location.pathname} location={location}>
            <Route exact path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post/:id" element={<Single />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/edit/profile/:id" element={<ProfileEdite />} />
            <Route path="/write" element={<Write />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/*" element={<Page404 />} />
            <Route path="/*/" element={<Page404 />} />
            <Route path="/profile/*" element={<Page404 />} />
          </Routes>
          <Footer />
        </div>
      </AnimatePresence>
    </div>
  );
}

export default App;
