import React from "react";
import styles from "./Header.module.css";

export const Header = ({ title, text }) => {
  const websiteIndex = title.toLowerCase().indexOf("website");
  const beforeWebsite = title.slice(0, websiteIndex);
  const website = title.slice(websiteIndex, websiteIndex + 7);
  const afterWebsite = title.slice(websiteIndex + 7);

  return (
    <>
      <h1>
        {beforeWebsite}
        <span className={styles.gradientText}>{website}</span>
        {afterWebsite}
      </h1>
      <p className={styles.bannerText}>{text}</p>
    </>
  );
};
