import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import TitleHeading from "../TitleHeading/TitleHeading";
import ContactForm from "../contact/ContactForm";

export const Footer = () => {
  return (
    <footer className={styles.contact}>
      <TitleHeading headingName={"Contact Me"} />
      <ContactForm />
      <div className={styles.additionalLinks}>
        <div>
          <h4 className={styles.callLink}>Call me</h4>
          <a href="tel:+254748924732">+2547 4892 4732</a>
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
