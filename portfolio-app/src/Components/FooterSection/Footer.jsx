import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className={styles.contact}>
      <h2 className={styles.sectionHeading}>contact me</h2>
      <div className={styles.contactLinks}>
        <div className="phone-no link">
          <h4>Call me</h4>
          <a href="tel:+254741862946">+254741862946</a>
        </div>
        <div className="email link">
          <h4>Email:</h4>
          <a href="mailto:paulmurithi233@gmail.com" rel="noreferrer">
            paulmurithi233@gmail.com
          </a>
        </div>
        <div className={styles.socialMediaIcons}>
          <a
            href="http://github.com/paul-murithi"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/paul-murithi-015938241/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};
