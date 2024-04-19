import { About } from "./Components/About/About";
import { Button } from "./Components/Button/Button";
import { Footer } from "./Components/FooterSection/Footer";
import { BannerHeader } from "./Components/HeaderSection/BannerHeader";
import { Image } from "./Components/Image/Image";
import { Navigation } from "./Components/NavigationMenu/Navigation";
import { Project } from "./Components/Projects/Project";
import { Skills } from "./Components/Skills/Skills";
import { TechnologiesSection } from "./Components/Technologies/TechnologiesSection";

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
    </>
  );
}

export default App;
