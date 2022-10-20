import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logoMetaBlog.png";
import { AuthContext } from "../context/authContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <motion.div
      className="navbar"
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 200 }}
      transition={{ duration: 3.7 }}
    >
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=metaverse">
            <h3>Metaverse</h3>
          </Link>
          <Link className="link" to="/?cat=crypto">
            <h3>Crypto</h3>
          </Link>
          <Link className="link" to="/?cat=jeux">
            <h3>Jeux Vidéo</h3>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h3>Technology</h3>
          </Link>
          <Link className="link" to="/?cat=science">
            <h3>Science</h3>
          </Link>
          {currentUser && (
            <Link
              className="link"
              to={`/profile/${currentUser.id}`}
              state={currentUser}
            >
              <span className="userNav">{currentUser?.username}</span>
            </Link>
          )}
          {currentUser ? (
            <Link className="link" to="/">
              <span onClick={logout}>Déconnecter</span>
            </Link>
          ) : (
            <Link className="link" to="/login">
              <span className="userConnect">Connecter</span>
            </Link>
          )}
          {currentUser && (
            <Link className="link" to="/write">
              <span className="write">Rédiger</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
