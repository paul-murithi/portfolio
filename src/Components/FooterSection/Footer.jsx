import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import TitleHeading from "../TitleHeading/TitleHeading";

export const Footer = () => {
  return (
    <footer className={styles.contact}>
      <TitleHeading headingName={"Contact Me"} />
      <div className={styles.contactLinks}>
        <div className="phone-no link">
          <h4>Call me</h4>
          <a href="tel:+254748924732">+2547 4892 4732</a>
        </div>
        <div className="email link">
          <h4>Email:</h4>
          <a href="mailto:paulmurithi518@gmail.com" rel="noreferrer">
            paulmurithi518@gmail.com
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
