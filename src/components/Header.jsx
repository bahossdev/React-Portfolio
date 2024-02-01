import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <header className="header">
        <h1 className="title"><span onClick={() => { window.location.href = '/' }}>Bahar Ossareh</span></h1>
        <NavBar />
      </header>
    </>
  );
}

export default Header;
