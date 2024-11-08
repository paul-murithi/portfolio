import React from "react";
import TitleHeading from "../TitleHeading/TitleHeading";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <motion.section
      className={styles.additionalSkills}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      <TitleHeading headingName={"Additional Skills"} />

      <div className={styles.skillsFx}>
        {[skillsSet1, skillsSet2, skillsSet3].map((skills, index) => (
          <motion.ul
            key={index}
            className={styles[`skills${index + 1}`]}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotate: -10 },
              visible: {
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            {skills.map((skill) => (
              <motion.li
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        ))}
      </div>
    </motion.section>
  );
};

const skillsSet1 = [
  "Git & GitHub",
  "REST APIs",
  "Frontend & Backend Development",
];
const skillsSet2 = ["Problem Solving", "Communication", "Adaptability"];
const skillsSet3 = ["Linux", "Database Management", "Cloud Computing"];
