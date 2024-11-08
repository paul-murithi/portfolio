import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import TitleHeading from "../TitleHeading/TitleHeading";

export const About = () => {
  return (
    <motion.section
      className={styles.aboutMe}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
    >
      <TitleHeading headingName={"About me"} />

      <motion.p
        className={styles.alignCenter}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        A dedicated and highly motivated developer with a passion for computer
        science and information technology. My goal is to build and design
        software applications that impact our lives positively every day.
      </motion.p>

      <motion.h3
        className={styles.alignCenter}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Education and Certifications
      </motion.h3>

      <motion.div
        className={styles.aboutMain}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.div
          className={styles.educationCertifications}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p>
            <b>Bsc Information Technology</b>
          </p>
          <p>
            <i>Mount Kenya University</i>
          </p>
          <p>ongoing...</p>
        </motion.div>

        <motion.div
          className={styles.educationCertifications}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p>
            <b>Diploma in computer science</b>
          </p>
          <p>
            <i>Technical University of Mombasa</i>
          </p>
          <p>2021-2023</p>
        </motion.div>

        <motion.div
          className={styles.educationCertifications}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "230px",
            }}
          >
            <b>Certification in software engineering</b>
          </p>
          <p>
            <i>ALX Africa</i>
          </p>
          <a
            href="https://intranet.alxswe.com/certificates/L5r26Hme7s"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            Verify Certification
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
