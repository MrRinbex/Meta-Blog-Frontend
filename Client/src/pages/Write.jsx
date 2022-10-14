import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import "moment/locale/fr"; // without this line it didn't work
moment.locale("fr");

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.description || "");
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(state?.title || "");
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post("/upload", formData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const urlImage = await upload();
    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            description: value,
            cat,
            img: file ? urlImage : "",
          })
        : await axios.post(`/posts/`, {
            title,
            description: value,
            cat,
            img: file ? urlImage : "",
            date: moment(Date.now()).format(`YYYY-MM-DD HH:mm:ss`),
          });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="writePage">
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="Titre"
          onChange={(e) => setTitle(e.target.value)}
        />
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
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            télécharger une image
          </label>
          <div className="buttons">
            <button className="firstBtn">Enregistrer comme Brouillon</button>
            {file ? (
              <button className="secondBtn" onClick={handleClick}>
                {!state ? "Publier" : "Mettre à jour"}
              </button>
            ) : (
              <p className="warning">
                Une image pour l'article est indispensable!
              </p>
            )}
          </div>
        </div>
        <div className="items">
          <h1>Catégorie</h1>
          <div className="category">
            <input
              type="radio"
              defaultChecked={cat === "metaverse"}
              name="cat"
              value="metaverse"
              id="metaverse"
              onClick={(e) => setCat(e.target.value)}
            />
            <label htmlFor="metaverse">Metaverse</label>
          </div>
          <div className="category">
            <input
              type="radio"
              defaultChecked={cat === "crypto"}
              name="cat"
              value="crypto"
              id="crypto"
              onClick={(e) => setCat(e.target.value)}
            />
            <label htmlFor="crypto">Crypto</label>
          </div>
          <div className="category">
            <input
              type="radio"
              defaultChecked={cat === "jeux"}
              name="cat"
              value="jeux"
              id="jeux"
              onClick={(e) => setCat(e.target.value)}
            />
            <label htmlFor="jeux">Jeux Vidéo</label>
          </div>
          <div className="category">
            <input
              type="radio"
              defaultChecked={cat === "technology"}
              name="cat"
              value="technology"
              id="technology"
              onClick={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="category">
            <input
              type="radio"
              defaultChecked={cat === "science"}
              name="cat"
              value="science"
              id="science"
              onClick={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
