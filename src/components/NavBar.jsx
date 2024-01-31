/* eslint-disable react/prop-types */

function NavBar({ setPage }) {
  return (
    <nav className="nav">
      <a onClick={() => setPage("AboutMe")}>About Me</a>
      <a onClick={() => setPage("Portfolio")}>Portfolio</a>
      <a onClick={() => setPage("Contact")}>Contact</a>
      <a onClick={() => setPage("Resume")}>Resume</a>
    </nav>
  );
}

export default NavBar;
