import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/register",
        inputs
      );
      console.log("userCreated", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <h1>S'enregistrer</h1>
      <p>Veuillez remplir les champs-ci-dessous pour devenir membre.</p>
      <form>
        <input
          required
          type="text"
          placeholder="identifiant"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="mot de passe"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Valider</button>
        <p>mot de passe / identifiant erroné</p>
        <span>
          Vous avez déjà un compte ?
          <br />
          <Link className="link" to="/Login">
            Connecter ici
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
