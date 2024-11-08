import { About } from "./Components/About/About";
import { Button } from "./Components/Button/Button";
import { Footer } from "./Components/FooterSection/Footer";
import { BannerHeader } from "./Components/HeaderSection/BannerHeader";
import { Image } from "./Components/Image/Image";
import { Navigation } from "./Components/NavigationMenu/Navigation";
import { Project } from "./Components/Projects/Project";
import { Skills } from "./Components/Skills/Skills";
import { TechnologiesSection } from "./Components/Technologies/TechnologiesSection";
import { Resume } from "./Components/Resume/Resume";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <BannerHeader />
      <Project />
      <TechnologiesSection />
      <About />
      <Skills />
      <Footer />
      <Resume />
    </>
  );
}

export default App;
