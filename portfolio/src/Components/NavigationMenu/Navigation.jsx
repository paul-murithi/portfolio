import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./NavigationMenu.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.primaryNav}>
      <div className={styles.navLinks}>
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#technologies">Technologies</a>
          </li>
          <li>
            <a href="#about-me">About me</a>
          </li>
        </ul>
      </div>
      <div className={styles.socialMediaIcons}>
        <a
          href="http://github.com/paul-murithi"
          target="_blank"
          rel="noreferrer"
          title="Visit GitHub Profile"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/paul-murithi-015938241/"
          target="_blank"
          rel="noreferrer"
          title="Visit LinkedIn Profile"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
      </div>
    </nav>
  );
};
