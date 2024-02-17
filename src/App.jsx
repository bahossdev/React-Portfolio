
// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from './components/Header';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    {/* <div style={{
      position: 'relative', 
      width: '100vw',
      height: '100vh',
    }}></div>
        <div style={{
      backgroundImage: `url('../blue-bg.jpg')`,
      backgroundColor: '#173a58ba',
      backgroundSize: 'cover',
      filter: 'blur(5px)',
      width: '100vw',
      height: '100vh',
      zIndex: -1,
    }}></div> */}
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