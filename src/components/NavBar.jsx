import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  // Get the current page location
  const currentPage = useLocation().pathname;
  console.log(currentPage); // Log the current page for debugging

  return (
    <ul className="nav">
      {/* Navigation links */}
      <li className={"nav-item " + (currentPage === '/' ? 'active' : '')}>
        {/* Link to the home page */}
        <Link to="/">About Me</Link>
      </li>
      <li className={"nav-item " + (currentPage === '/Portfolio' ? 'active' : '')}>
        {/* Link to the portfolio page */}
        <Link to="/Portfolio">Portfolio</Link>
      </li>
      <li className={"nav-item " + (currentPage === '/Resume' ? 'active' : '')}>
        {/* Link to the resume page */}
        <Link to="/Resume">Resume</Link>
      </li>
      <li className={"nav-item " + (currentPage === '/Contact' ? 'active' : '')}>
        {/* Link to the contact page */}
        <Link to="/Contact">Contact</Link>
      </li>
    </ul>
  );
}

export default NavBar;
