import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h1>Se connecter</h1>
      <p>Veuillez remplir les champs-ci-dessous pour vous connecter.</p>
      <form>
        <input required type="text" placeholder="identifiant" />
        <input required type="password" placeholder="mot de passe" />
        <button>Valider</button>
        <p>mot de passe / identifiant erroné</p>
        <span>
          Vous n'avez pas de compte ?
          <br />
          <Link className="link" to="/Register">
            Commencer ici
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
