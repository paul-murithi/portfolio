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
  onClick,
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

      <Button
        buttonText={buttonText}
        className="openProject"
        title="open project"
        type="button"
      />
    </div>
  );
};
