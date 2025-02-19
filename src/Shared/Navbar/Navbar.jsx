import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut=()=>{
    logout()
    .then()
    .catch(error=>console.log(error))
  }
  const navbar = [
    <li>
      <Link to="/">Home</Link>
    </li>,
    <li>
      <Link to="/about">About</Link>
    </li>,
    <li>
      <Link to="/booking">My Bookings</Link>
    </li>,
    <li>
      <Link to="/blog">Blog</Link>
    </li>,
  ];
  return (
    <div className="navbar bg-base-100">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navbar}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="" className="w-16" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbar}</ul>
      </div>
      <div className="navbar-end">
        {user? <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Profile"
                src={user?.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                {user?.displayName}
              </a>
            </li>
            <li>
              <a>{user?.email}</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div> : <Link to="/signIn" className="btn btn-outline bg-[#FF3811] text-white">Login</Link>}
      </div>
    </div>
  );
};

export default Navbar;
