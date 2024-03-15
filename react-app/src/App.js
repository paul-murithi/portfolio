import "./App.css";
import { Navigation } from "./Components/NavigationMenu/Navigation";
import { BannerHeader } from "./Components/HeaderSection/BannerHeader";
import { Project } from "./Components/Projects/Project";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navigation />
      <BannerHeader />
      <Project />
    </Fragment>
  );
}

export default App;
