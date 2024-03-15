import React, { useState, useEffect, useRef } from "react";
import styles from "./TechnologiesSection.module.css";

export const TechnologiesSection = () => {
  const [fillLevels, setFillLevels] = useState({
    HTML: 0,
    CSS: 0,
    JavaScript: 0,
    React: 0,
    Java: 0,
    Python: 0,
    Tailwind: 0,
  });

  const technologiesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (technologiesRef.current) {
        const sectionTop = technologiesRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight / 2) {
          const newFillLevels = {
            HTML: 95,
            CSS: 90,
            JavaScript: 90,
            React: 75,
            Java: 80,
            Python: 50,
            Tailwind: 70,
          };
          setFillLevels(newFillLevels);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={technologiesRef} className={styles.technologiesTab}>
      <h1 className={styles.sectionHeading}>Technologies</h1>
      <div className={styles.technologiesProgress}>
        {Object.entries(fillLevels).map(([technology, fillLevel]) => (
          <div className={styles.technologiesProgressItem} key={technology}>
            <div className={styles.technologyName}>
              <p>{technology}</p>
              <p>{fillLevel}%</p>
            </div>
            <div className={styles.progressBarWrap}>
              <div
                className={`${styles.progressBar} ${
                  styles[`${technology.toLowerCase()}Bar`]
                }`}
                style={{ width: `${fillLevel}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
