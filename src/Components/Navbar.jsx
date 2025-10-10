import { GrGithub } from 'react-icons/gr';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="max-w-7xl flex mx-auto py-4">
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
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={'/'}>Home</Link>
              </li>

              <li>
                <Link to={'/apps'}>Apps</Link>
              </li>
              <li>
                <Link to={'/installation'}>Installation</Link>
              </li>
            </ul>
          </div>
          <Link to={'/'} className="flex items-center gap-2">
            {' '}
            <img className="w-8" src="/logo.png" alt="" />
            <span className="linear_color font-bold text-[16px]">HERO.IO</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal gap-9 px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#7728e6] font-semibold border-b-2 border-[#7728e6]'
                    : 'text-gray-600 hover:text-[#7728e6]'
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#7728e6] font-semibold border-b-2 border-[#7728e6]'
                    : 'text-gray-600 hover:text-[#7728e6]'
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#7728e6] font-semibold border-b-2 border-[#7728e6]'
                    : 'text-gray-600 hover:text-[#7728e6]'
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end pr-5">
          <a className="btn bg-[linear-gradient(90deg,#632EE3,#9F62F2)] text-white">
            {' '}
            <GrGithub />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
