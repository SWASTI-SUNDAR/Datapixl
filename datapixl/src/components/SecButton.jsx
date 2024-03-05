import React from "react";
import { motion } from "framer-motion";

const SecButton = ({ onClick, children }) => {
  return (
    <motion.button
      className={`px-8 py-2 border-[blue] border-[2px]  text-primary font-semibold bg-white rounded-md focus:outline-none focus:ring`}
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
