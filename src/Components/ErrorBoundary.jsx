import { Link, useRouteError } from 'react-router';
import img from '../assets/error-404.png';
import Navbar from './Navbar';
import Footer from './Footer';

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center py-22 bg-gray-100">
        <img src={img} alt="" />
        <h2>{error.message}</h2>
        <h2 className="text-5xl mt-12">Oops, page not found!</h2>
        <p className="text-gray-500 mt-5">
          The page you are looking for is not available.
        </p>
        <Link
          to={'/'}
          className=" btn bg-[linear-gradient(90deg,#632EE3,#9F62F2)] cursor-pointer text-white mt-4"
        >
          Go Back!
        </Link>
      </div>
      <Footer />
    </>
  );
}
