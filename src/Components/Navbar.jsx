import { GrGithub } from 'react-icons/gr';
import { Link, NavLink, useNavigate } from 'react-router';
import { useState } from 'react';
import Spinner from './Spinner';

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // NavLink click handler
  const handleNavClick = (path, e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 300);
  };

  return (
    <div className="bg-base-100 shadow-sm relative">
      {/* Spinner Overlay */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Spinner />
        </div>
      )}

      <div className="max-w-7xl flex mx-auto py-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {['/', '/apps', '/installation'].map((path, idx) => {
                const label =
                  path === '/'
                    ? 'Home'
                    : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
                return (
                  <li key={idx}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive
                          ? 'text-[#7728e6] font-semibold underline border-[#7728e6]'
                          : 'text-gray-600 hover:text-[#7728e6]'
                      }
                      onClick={(e) => handleNavClick(path, e)}
                    >
                      {label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2">
            <img className="w-8" src="/logo.png" alt="logo" />
            <span className="linear_color font-bold text-[16px]">HERO.IO</span>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal gap-9 px-1">
            {['/', '/apps', '/installation'].map((path, idx) => {
              const label =
                path === '/'
                  ? 'Home'
                  : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
              return (
                <li key={idx}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-[#7728e6] font-semibold border-b-2 border-[#7728e6]'
                        : 'text-gray-600 hover:text-[#7728e6]'
                    }
                    onClick={(e) => handleNavClick(path, e)}
                  >
                    {label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end pr-5">
          <a
            href="https://github.com/nazmulHuda121"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-[linear-gradient(90deg,#632EE3,#9F62F2)] text-white flex items-center gap-2"
          >
            <GrGithub />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
