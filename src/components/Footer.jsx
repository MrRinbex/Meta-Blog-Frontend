import React from "react";
import Logo from "../img/logoMetaBlog.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -300 }}
      transition={{ duration: 3.7 }}
    >
      <img src={Logo} alt="logo" />
      <span>© 2022 Leocheffi.com</span>
    </motion.footer>
  );
};

export default Footer;
