import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Navber = () => {
  const { user, signOurUser } = use(AuthContext);

  // logOutHandle
  const logOutHandle = () => {
    signOurUser()
    .then()
    .catch(error => {
      console.log(error)
    })
  };

  const links = (
    <>
      <li className="font-semibold my-font">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="font-semibold my-font">
        <NavLink to={"/allproduct"}>All Products</NavLink>
      </li>
      {user && (
        <>
          <li className="font-semibold my-font">
            <NavLink>My Products</NavLink>
          </li>
          <li className="font-semibold my-font">
            <NavLink>My Bids</NavLink>
          </li>
          <li className="font-semibold my-font">
            <NavLink>Create Products</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="shadow-sm">
      <div className="navbar container mx-auto">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-3xl font-bold">
            Smart
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Deals
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={logOutHandle}
              className="btn btn-outline btn-primary"
            >
              LogOut
            </button>
          ) : (
            <Link to={"/login"} className="btn btn-outline btn-primary">
              LogIn
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
