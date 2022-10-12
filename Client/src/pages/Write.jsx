import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="writePage">
      <div className="content">
        <input type="text" placeholder="Titre" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="items">
          <h1>Publier</h1>
          <span>
            <b>Statut:</b> Brouillon
          </span>
          <span>
            <b>Visibilité:</b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" />
          <label className="file" htmlFor="file">
            télécharger
          </label>
          <div className="buttons">
            <button>Enregistrer comme Brouillon</button>
            <button>Mettre à jour</button>
          </div>
        </div>
        <div className="items">
          <h1>Catégorie</h1>
          <div className="category">
            <input type="radio" name="cat" value="metaverse" id="metaverse" />
            <label htmlFor="metaverse">Metaverse</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" value="crypto" id="crypto" />
            <label htmlFor="crypto">Crypto</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" value="jeux" id="jeux" />
            <label htmlFor="jeux">Jeux Vidéo</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" value="technology" id="technology" />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" value="science" id="science" />
            <label htmlFor="science">Science</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
