import React from "react";
import { motion } from "framer-motion";

const SecButton = ({ onClick, children, px = 4, py = 2 }) => {
  return (
    <motion.button
      className={`px-${px} py-${py} border  text-primary font-semibold bg-white rounded-md focus:outline-none focus:ring`}
      type="button"
      whileHover={{
        scale: 1.05,
        backgroundColor: "#f3f4f6",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default SecButton;
