import React from "react";
import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <section className={styles.additionalSkills}>
      <h2 className={styles.sectionHeading}>Additional skills</h2>
      <div className={styles.skillsFx}>
        <ul className={styles.skills1}>
          <li>Git and github</li>
          <li>REST APIs</li>
          <li>Web development</li>
        </ul>
        <ul className={styles.skills2}>
          <li>Teamwork</li>
          <li>Communication and listening</li>
          <li>Adaptability</li>
        </ul>
        <ul className={styles.skills3}>
          <li>IT support</li>
          <li>Linux</li>
          <li>Computer networking</li>
        </ul>
      </div>
    </section>
  );
};
