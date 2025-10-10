import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="flex-1 bg-gray-100 pb-22">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <ToastContainer />
    </>
  );
};

export default MainLayout;
