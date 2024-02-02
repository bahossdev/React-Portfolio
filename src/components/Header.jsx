import NavBar from "./NavBar";

function Header() {
  return (
    <>
      {/* Header section */}
      <header className="header">
        {/* Title with link to homepage */}
        <h1 className="title"><span onClick={() => { window.location.href = '/' }}>Bahar Ossareh</span></h1>
        {/* Navigation bar */}
        <NavBar />
      </header>
    </>
  );
}

export default Header;
