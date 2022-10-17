import React from "react";

const ProfileEdite = () => {
  return (
    <div>
      <div>
        <h1>ProfileEdite TO DO</h1>
      </div>
      <div>
        <span>
          <h1>Modifier votre compte</h1>
        </span>
        <span>
          <h3>Modifier identifiant</h3>
          <span className="spanInfo">
            <input type="text" placeholder="identifiant" name="username" />
            <button className="secondBtn">Valider l'identifiant!</button>
          </span>
        </span>
        <span>
          <h3>Modifier email</h3>
          <span className="spanInfo">
            <input type="text" placeholder="email" name="email" />
            <button className="secondBtn">Valider l'email!</button>
          </span>
        </span>
        {/* <span>
            <h3>Modifier Mot de passe</h3>
            <span className="spanInfo">
              <input
                type="text"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </span>
          </span> */}
        <span>
          <h3>Modifier image de profile</h3>
          <span>
            <input style={{ display: "none" }} type="file" id="file" />
            <label className="file" htmlFor="file">
              télécharger une image
            </label>
          </span>
          (<button className="secondBtn">Valider!</button>)
        </span>
      </div>
    </div>
  );
};

export default ProfileEdite;
