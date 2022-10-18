import React, { useState, useEffect } from "react";
import loaderGif from "../img/loader.gif";

const Loader = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setStart(true);
    }, 3000);
  }, []);

  return (
    <div className="loader">
      {start ? <img src={loaderGif} alt="loader logo" /> : <div></div>}
    </div>
  );
};

export default Loader;
