import { useState } from "react";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

import "./App.css";

function App() {
  const [page, setPage] = useState("AboutMe");
  function switchPage() {
    switch (page) {
      case "AboutMe":
        return <AboutMe />;
      case "Portfolio":
      return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
      return <Resume />;
      default:
        return null;
    }
  }
  return (
    <>
      <NavBar setPage={setPage} />
      {switchPage()}
    </>
  );
}

export default App;
