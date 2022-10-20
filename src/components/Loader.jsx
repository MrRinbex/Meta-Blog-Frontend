import React, { useState, useEffect } from "react";
import loaderGif from "../img/loader.gif";
import { motion } from "framer-motion";

const Loader = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setStart(true);
    }, 1000);
  }, []);

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.7 }}
    >
      {start ? <img src={loaderGif} alt="loader logo" /> : <div></div>}
    </motion.div>
  );
};

export default Loader;
