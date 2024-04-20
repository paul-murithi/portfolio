import React from "react";
import styles from "./Button.module.css";

export const Button = ({ className, type, title, buttonText }) => {
  return (
    <button className={styles.linkButton} type={type} title={title}>
      {buttonText}
    </button>
  );
};
