import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logoMetaBlog.png";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
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
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Déconnecter</span>
          ) : (
            <Link className="link" to="/login">
              Connecter
            </Link>
          )}
          <Link className="link" to="/write">
            <span className="write">Rédiger</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
