import React from "react";
import styles from "./Header.module.css";

export const Header = ({ title, text }) => {
  const websiteIndex = title.indexOf("Website");

  const beforeWebsite = title.slice(0, websiteIndex);
  const website = title.slice(websiteIndex, websiteIndex + 7);
  const afterWebsite = title.slice(websiteIndex + 7);

  console.log();

  return (
    <>
      <h1>{title}</h1>
      <p className={styles.bannerText}>{text}</p>
    </>
  );
};
