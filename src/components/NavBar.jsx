// /* eslint-disable react/prop-types */

// function NavBar({ setPage }) {
//   return (
//     <nav className="nav">
//       <a onClick={() => setPage("AboutMe")}>About Me</a>
//       <a onClick={() => setPage("Portfolio")}>Portfolio</a>
//       <a onClick={() => setPage("Contact")}>Contact</a>
//       <a onClick={() => setPage("Resume")}>Resume</a>
//     </nav>
//   );
// }

// export default NavBar;

import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav ">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
