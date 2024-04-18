import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.aboutMe}>
      <h2 className={styles.sectionHeading}>About me</h2>
      <p className={styles.alignCenter}>
        A dedicated and highly motivated developer with a passion for computer
        science and information technology. My goal is to build and design
        software applications that impact our lives positively everyday.
      </p>
      <h3 className={styles.alignCenter}>Education background</h3>
      <div className={styles.aboutMain}>
        <div className={styles.educationCertifications}>
          <p>Diploma in computer science</p>
          <p>Technical university of mombasa</p>
          <p>2021-2023</p>
        </div>
        <div className={styles.educationCertifications}>
          <p>Certificate in software engineering</p>
          <p>ALX</p>
          <p>
            <i>Ongoing...</i>
          </p>
        </div>
        <div className={styles.educationCertifications}>
          <p>Cisco certified network associate</p>
          <p>Sightsavers international</p>
          <p>
            <i>Ongoing...</i>
          </p>
        </div>
      </div>
    </section>
  );
};
