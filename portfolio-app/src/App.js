import { Navigation } from "./Components/NavigationMenu/Navigation";
import { BannerHeader } from "./Components/HeaderSection/BannerHeader";
import { Project } from "./Components/Projects/Project";
import { TechnologiesSection } from "./Components/Technologies/TechnologiesSection";
import { Skills } from "./Components/Skills/Skills";
import { About } from "./Components/About/About";
import { Footer } from "./Components/FooterSection/Footer";

import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navigation />
      <BannerHeader />
      <Project />
      <TechnologiesSection />
      <Skills />
      <About />
      <Footer />
    </Fragment>
  );
}

export default App;
