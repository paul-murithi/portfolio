import React from "react";
import { motion } from "framer-motion";
import { Image } from "../Image/Image";
import { Header } from "./Header";
import styles from "./Header.module.css";
import group1 from "../../assets/Group1.svg";
import group2 from "../../assets/Group2.svg";
import group4 from "../../assets/Group4.svg";

export const BannerHeader = () => {
  return (
    <section>
      <motion.div
        className={styles.bannerHeader}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
      >
        <div className={styles.bannerMainContent}>
          <div>
            <h1>
              Welcome to My{" "}
              <span className={`${styles.gradientText}`}>Website</span>
            </h1>
            <p className={styles.bannerText}>
              I'm Kirera Paul Murithi, a passionate Software Developer dedicated
              to crafting high-quality software solutions.
            </p>
          </div>
          <Header
            title="About Me:"
            text="With a deep passion for software development, I focus on creating efficient, innovative solutions that enhance the digital experience."
          />
          <Header
            title="Let’s Build Together:"
            text="Whether it’s creating engaging user interfaces or building scalable backend systems, I’m here to bring your ideas to life with powerful, well-designed software."
          />
        </div>

        <motion.div
          className={styles.bannerBgImages}
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.5, duration: 1.2 },
          }}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Image src={group1} alt="Eclipse 1" />
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Image src={group4} alt="Eclipse 4" />
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Image src={group2} alt="Eclipse 2" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
