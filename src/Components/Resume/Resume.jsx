import React from "react";
import styles from "./Resume.module.css";

export const Resume = () => {
  return (
    <a
      href="https://drive.google.com/uc?export=download&id=1H76FLPPUm_YGCQCsvjC7KHZNg8KSDx4a"
      download
      className={styles.link}
    >
      Download resume
    </a>
  );
};
