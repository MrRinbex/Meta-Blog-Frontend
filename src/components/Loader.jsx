import React, { useState } from "react";
import loaderGif from "../img/loader.gif";

const Loader = () => {
  const [start, setStart] = useState(false);

  setTimeout(() => {
    setStart(true);
  }, 500);

  return (
    start && (
      <div className="loader">
        <img src={loaderGif} alt="loader logo" />
      </div>
    )
  );
};

export default Loader;
