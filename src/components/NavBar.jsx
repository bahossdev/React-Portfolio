import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const currentPage = useLocation().pathname;
  console.log(currentPage);
  return (
    <ul className="nav ">
      <li className={"nav-item " + (currentPage === '/' ? 'active' : '')}>
        <Link
          to="/"
        >
          About Me
        </Link>
      </li>
      <li className={"nav-item " + (currentPage === '/Portfolio' ? 'active' : '')}>
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? ' active' : ''}
        >
          Portfolio
        </Link>
      </li>
      <li className={"nav-item " + (currentPage === '/Resume' ? 'active' : '')}>
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? ' active' : ''}
        >
          Resume
        </Link>
      </li>
      <li className={"nav-item " + (currentPage === '/Contact' ? 'active' : '')}>
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? ' active' : ''}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
