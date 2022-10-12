import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/trash.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="leftBlock">
        <img
          src="https://www.fnordware.com/superpng/pnggrad16rgb.png"
          alt="img"
        />
        <div className="user">
          <img
            src="https://html.com/wp-content/uploads/flamingo.webp"
            alt="user img"
          />
          <div className="info">
            <span>Léo</span>
            <p>Article publié il y'a 4 jours</p>
          </div>
          <div className="edit">
            <Link to="/write?edit=1">
              <img src={Edit} alt="edit-btn" />
            </Link>
            <img src={Delete} alt="delete-btn" />
          </div>
        </div>
        <h1>Titre exemple 1</h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa
          egestas mollis varius; dignissim elementum. Mollis tincidunt mattis
          hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient
          habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
          sodales taciti duis praesent id. Consequat urna vitae morbi nunc
          congue. Lorem ipsum odor amet,
          <br />
          <br /> consectetuer adipiscing elit. Ac purus in massa egestas mollis
          varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor
          eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra
          rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis
          praesent id. Consequat urna vitae morbi nunc congue. Lorem ipsum odor
          amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis
          varius;
          <br />
          <br /> dignissim elementum. Mollis tincidunt mattis hendrerit dolor
          eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra
          rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis
          praesent id. Consequat urna vitae morbi nunc congue.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
