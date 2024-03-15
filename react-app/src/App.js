import "./App.css";
import { Navigation } from "./Components/NavigationMenu/Navigation";
import { BannerHeader } from "./Components/HeaderSection/BannerHeader";
import { Project } from "./Components/Projects/Project";
import { TechnologiesSection } from "./Components/Technologies/TechnologiesSection";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navigation />
      <BannerHeader />
      <Project />
      <TechnologiesSection />
    </Fragment>
  );
}

export default App;
