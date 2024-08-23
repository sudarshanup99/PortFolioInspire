import "./App.css";
import Navbar from "./Component/Navbar";
import ContactMe from "./Pages/ContactMe";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import TechStacks from "./Pages/TechStacks";

import Work from "./Pages/Work";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Work />
      <TechStacks />
      <Project />
      <ContactMe />
    </>
  );
}

export default App;
