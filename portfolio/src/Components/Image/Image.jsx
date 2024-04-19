import React from "react";
import styles from "./Image.module.css";

export const Image = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      style={styles}
    />
  );
};
