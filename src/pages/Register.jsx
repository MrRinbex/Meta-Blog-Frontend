import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiUrl}/api/auth/register`, inputs);
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
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
        {error && <p>{error}</p>}
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
