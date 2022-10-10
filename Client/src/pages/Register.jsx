import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login">
      <h1>S'enregistrer</h1>
      <p>Veuillez remplir les champs-ci-dessous pour devenir membre.</p>
      <form>
        <input required type="text" placeholder="identifiant" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="mot de passe" />
        <button>Valider</button>
        <p>mot de passe / identifiant erroné</p>
        <span>
          Vous avez déjà un compte ?
          <br />
          <Link to="/Login"> Connecter ici</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
