import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logoMetaBlog.png";
const Navbar = () => {
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
          <Link className="link" to="/?cat=ufo">
            <h3>Ufo</h3>
          </Link>
          <span>Léo</span>
          <span>Déconnecter</span>
          <span className="write">
            <Link className="link" to="/write">
              Rédiger
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
