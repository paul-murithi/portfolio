import React from "react";
import { Button } from "../Button/Button";
import { Image } from "../Image/Image";
import styles from "./Project.module.css";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export const ProjectCard = ({
  imageSrc,
  alt,
  title,
  details,
  stack,
  buttonText,
  link,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardElement = document.getElementById(title);
    if (cardElement) observer.observe(cardElement);

    return () => {
      if (cardElement) observer.unobserve(cardElement);
    };
  }, [controls, title]);

  return (
    <motion.div
      id={title}
      className={styles.projectContainer}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
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
        className={styles.openProject}
        title="open project"
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
      </a>
    </motion.div>
  );
};
