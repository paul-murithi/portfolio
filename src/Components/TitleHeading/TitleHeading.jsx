import React from "react";
import { motion } from "framer-motion";
import styles from "./TitleHeading.module.css";

const TitleHeading = ({ headingName }) => {
  return (
    <motion.h2
      className={styles.sectionHeading}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {headingName}
    </motion.h2>
  );
};

export default TitleHeading;
