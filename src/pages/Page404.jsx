import React from "react";
import errorImage from "../img/error-404.png";

const Page404 = () => {
  return (
    <div className="containerErrorPage">
      <img src={errorImage} alt={404} />
    </div>
  );
};

export default Page404;
