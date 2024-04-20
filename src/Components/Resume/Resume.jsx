import React from "react";
import styles from "./Resume.module.css";

export const Resume = () => {
  return (
    <a
      href="https://drive.google.com/uc?export=download&id=18tISs_hA2wB6vefE7dnkMqHk7nS98wEA"
      download
      className={styles.link}
    >
      Download resume
    </a>
  );
};
