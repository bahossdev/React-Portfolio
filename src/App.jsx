import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

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
      <Footer />
    </>
  );
}

export default App;
