import React from "react";
import logoEnterPage from "../img/logoMetaBlog.png";
import { motion } from "framer-motion";

const EntrancePage = () => {
  return (
    <motion.div
      className="setEntrancePage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <motion.img
        src={logoEnterPage}
        alt="loader logo"
        animate={{
          scale: [1, 1, 1.1, 1.1, 1, 1],
        }}
        transition={{ duration: 3 }}
      />
    </motion.div>
  );
};

export default EntrancePage;
