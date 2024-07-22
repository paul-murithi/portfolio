import React from "react";
import { Button } from "../Button/Button";
import { Image } from "../Image/Image";
import styles from "./Project.module.css";

export const ProjectCard = ({
  imageSrc,
  alt,
  title,
  details,
  stack,
  buttonText,
  link,
}) => {
  return (
    <div className={styles.projectContainer}>
      <Image src={imageSrc} alt={alt} />
      <div className={styles.projectNumber}>
        <h3>{title}</h3>
        <div className={styles.lnGradientBorder}></div>
      </div>
      <p className={styles.projectDetails}>{details}</p>
      <div>
        <strong>{stack}</strong>
      </div>

      <a
        href={link}
        className="openProject"
        title="open project"
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
      </a>
    </div>
  );
};
