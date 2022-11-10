import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const handleSignOut = () => {
    userSignOut()
      .then((result) => {
        console.log("Signing Out");
      })
      .catch((error) => {
        console.log("Signing Out Failed", error.message);
      });
  };
  const navItems = (
    <ul className="menu menu-horizontal p-0">
      <li>
        <Link to={"/"}>HOME</Link>
      </li>
      <li>
        <Link to={"/blog"}>BLOG</Link>
      </li>
      <li>
        {user ? (
          <button
            className="btn btn-ghost normal-case text-xl"
            title={user.displayName}
          >
            <div className="avatar">
              <div className="w-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} alt="user" />
              </div>
            </div>
          </button>
        ) : (
          <button className="btn btn-ghost normal-case text-xl">
            <Link to={"/login"}>LOGIN</Link>
          </button>
        )}
      </li>
      <li>
        {user && (
          <>
            <button className="btn btn-ghost normal-case text-md">
              <Link to={"/myreviews"}>MY REVIEWS</Link>
            </button>
            <button className="btn btn-ghost normal-case text-md">
              <Link to={"/addservices"}>ADD SERVICES</Link>
            </button>
            <button className="btn btn-ghost normal-case text-md text-red-900">
              <Link onClick={handleSignOut}>SIGNOUT</Link>
            </button>
          </>
        )}
      </li>
    </ul>
  );
  return (
    <div>
      <p className="justify-center">ছবি | Ghor</p>
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="justify-center" to={"/"}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link className="justify-center">BLOG</Link>
                </li>
                <li>
                  {user ? (
                    <button
                      className="btn btn-ghost normal-case text-xl"
                      title={user.displayName}
                    >
                      <div className="avatar">
                        <div className="w-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={user.photoURL} alt="user" />
                        </div>
                      </div>
                    </button>
                  ) : (
                    <button className="btn btn-ghost normal-case text-xl">
                      <Link to={"/login"}>LOGIN</Link>
                    </button>
                  )}
                </li>
                <li>
                  {user && (
                    <>
                      <button className="btn btn-ghost normal-case text-md">
                        <Link to={"/myreviews"}>MY REVIEWS</Link>
                      </button>
                      <button className="btn btn-ghost normal-case text-md">
                        <Link to={"/addservices"}>ADD SERVICES</Link>
                      </button>
                      <button className="btn btn-ghost normal-case text-md text-red-900">
                        <Link onClick={handleSignOut}>SIGNOUT</Link>
                      </button>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">{navItems}</div>
          <div className="navbar-start"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
