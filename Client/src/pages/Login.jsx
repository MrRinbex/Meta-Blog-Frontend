import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/login", inputs);
      console.log(inputs);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className="login">
      <h1>Se connecter</h1>
      <p>Veuillez remplir les champs-ci-dessous pour vous connecter.</p>
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
          type="password"
          placeholder="mot de passe"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Connecter</button>
        {error && <p>{error}</p>}
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
