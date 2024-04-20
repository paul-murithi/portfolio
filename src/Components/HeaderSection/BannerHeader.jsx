import React from "react";
import { Image } from "../Image/Image";
import { Header } from "./Header";
import styles from "./Header.module.css";
import group1 from "../../assets/Group1.svg";
import group2 from "../../assets/Group2.svg";
import group4 from "../../assets/Group4.svg";

export const BannerHeader = () => {
  return (
    <section>
      <div className={styles.bannerHeader}>
        <div className={styles.bannerMainContent}>
          <Header
            title="Welcome to My Website!"
            text="My name is Kirera Paul Murithi, and I am a passionate web developer dedicated to designing and building the best web and software applications. I also delve into the realms of IT support and computer networking"
          />
          <Header
            title="About Me:"
            text="I thrive on creating innovative solutions that push the boundaries of web and software development. With a keen interest in IT support and computer networking, I bring a holistic approach to every project I undertake."
          />
          <Header
            title="Let's Build Something Amazing:"
            text="Whether it's designing captivating user interfaces or architecting robust backend systems, I'm committed to delivering excellence. Join me on this journey as we turn ideas into reality and transform the digital landscape together."
          />
        </div>
        <div className={styles.bannerBgImages}>
          <Image src={group1} alt="Eclipse 1" />
          <Image src={group4} alt="Eclipse 4" />
          <Image src={group2} alt="Eclipse 2" />
        </div>
      </div>
    </section>
  );
};
