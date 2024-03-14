import "./App.css";
import { Navigation } from "./Components/NavigationMenu/Navigation";
import { BannerHeader } from "./Components/HeaderSection/BannerHeader";

function App() {
  return (
    <div className="App">
      <Navigation />
      <BannerHeader />
    </div>
  );
}

export default App;
