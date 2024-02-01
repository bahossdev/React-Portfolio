// import { useState } from "react";
// import Header from "./components/Header";
// import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import AboutMe from "./pages/AboutMe";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
// import Resume from "./pages/Resume";

import "./App.css";

// function App() {
//   const [page, setPage] = useState("AboutMe");
//   function switchPage() {
//     switch (page) {
//       case "AboutMe":
//         return <AboutMe />;
//       case "Portfolio":
//         return <Portfolio />;
//       case "Contact":
//         return <Contact />;
//       case "Resume":
//         return <Resume />;
//       default:
//         return null;
//     }
//   }
//   return (
//     <>
//       <Header />
//       <NavBar setPage={setPage} />
//       {switchPage()}
//       <Footer />
//     </>
//   );
// }

// export default App;

// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <main>
        <div className="page-view">
        <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;