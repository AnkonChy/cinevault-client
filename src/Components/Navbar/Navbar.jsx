import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import "./Navbar.css";
// import "Navbar.css";
const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div
      className={`navbar pt-4 pb-4 mx-auto w-full fixed ${
        isScrolled ? "backdrop-blur-sm" : "backdrop-blur-none"
      } z-10 top-0 px-4  ${
        location.pathname === "/" || location.pathname === "/aboutUs"
          ? "text-white"
          : "text-black"
      }`}
    >
      <div className="navbar-start">
        <div>
          <Link className="animate__animated animate__rubberBand Left text-2xl md:text-4xl font-bold">
            CineVault
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg md:text-xl font-semibold gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/allMovies">All Movies</NavLink>
          {user ? <NavLink to="/addMovies">Add Movie</NavLink> : ""}
          {user ? <NavLink to="/myFavourite">My Favourite</NavLink> : ""}
          <NavLink to="/aboutUs">About us</NavLink>
          <NavLink to="/support">Support</NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <input
          type="checkbox"
          className="toggle theme-controller hidden md:block"
          onChange={handleThemeChange}
          checked={theme === "dark"}
        />
        {user ? (
          <img
            title={user.displayName}
            className="w-12 h-12 rounded-full mr-4 object-cover"
            src={user.photoURL}
          ></img>
        ) : (
          ""
        )}
        {user ? (
          <button
            className="py-2 px-4 bg-blue-900 text-white rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/login">
              <button className="py-2 px-4 bg-blue-900 text-white rounded">
                Login
              </button>
            </NavLink>
            <NavLink to="/register">
              <button className="py-2 px-4 bg-red-900 text-white rounded">
                Register
              </button>
            </NavLink>
          </>
        )}

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
            className="z-10 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 p-2 shadow right-0 gap-3"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allMovies">All Movies</NavLink>
            <NavLink to="/addMovies">Add Movies</NavLink>
            <NavLink to="/myFavourite">My Favourite</NavLink>
            <NavLink to="/aboutUs">About us</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
