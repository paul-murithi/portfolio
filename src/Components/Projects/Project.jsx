import React from "react";
import styles from "./Project.module.css";
import { ProjectCard } from "./ProjectCard";
import TitleHeading from "../TitleHeading/TitleHeading";
import transitease from "../../assets/transitEase project.png";
import Airbnb from "../../assets/Airbnb clone v2.png";
import ecommerce from "../../assets/e commerce.png";
import fms from "../../assets/farm management system.png";

export const Project = () => {
  return (
    <section className={styles.projectsCards}>
      <TitleHeading headingName={"Projects"} />
      <div className={styles.mainProjectContainer}>
        <ProjectCard
          imageSrc={transitease}
          alt="Transitease"
          buttonText="Look it up"
          details="A online ticket booking platform that simplifies travel arrangements and enhances the overall journey experience. With a user-friendly interface and comprehensive range of services, connecting travelers to a vast network of bus routes, making it effortless to search, book, and manage tickets."
          stack="Tech stack: HTML, CSS, Javascript, Java spring boot, MySql."
          title="TransitEase bus booking system"
          link="https://github.com/paul-murithi/TransitEase-Bus-Travel-Website"
        />
        <ProjectCard
          imageSrc={Airbnb}
          alt="Airbnb"
          buttonText="Look it up"
          details="A web application - 'AirBnB Clone,' using Python's Django
          framework. The project included user authentication, accommodation
          search, booking, and geolocation features, creating a comprehensive
          web platform for accommodations. Integrated with responsive design
          and deployment scripts for hosting."
          stack="Tech stack: Python,HTML,CSS, Shell"
          title="AirBnB clone"
          link="https://github.com/paul-murithi/AirBnB_clone"
        />
        <ProjectCard
          imageSrc={ecommerce}
          alt="Amazon"
          buttonText="Look it up"
          details="A clone of the popular e-commerce website Amazon, which allows users
          to order goods, track item and track delivery information"
          stack="Tech stack: HTML,CSS, React, MySQL, SpringBoot"
          title="E-commerce clone"
          link="https://github.com/paul-murithi/Amazon-Ecommerce-clone"
        />
        <ProjectCard
          imageSrc={fms}
          alt="FMS"
          buttonText="Look it up"
          details="An upcoming web application that will offer features like crop
          tracking, livestock management, and task scheduling. Users can
          monitor yields, livestock health, and set reminders for farm tasks."
          stack="Tech stack: HTML,CSS, Javascript, Laravel, SQL"
          title="Farm management system"
          link="https://github.com/paul-murithi/Farm_managemnt_system"
        />
      </div>
    </section>
  );
};
