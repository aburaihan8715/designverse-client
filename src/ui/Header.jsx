import { Link, Navigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useCartData from "../hooks/useCartData";
import useRole from "../hooks/useRole";
import ActiveLink from "./ActiveLink";
import Button from "./Button";
import { useState } from "react";

const Header = () => {
  const { user, logOutUser } = useAuth();
  const [logoutLoading, setLogoutLoading] = useState(false);

  // const navigate = useNavigate();
  const { cartData } = useCartData();
  const { roleData } = useRole();
  // console.log(roleData);

  const menuItems = (
    <>
      <li>
        <ActiveLink className="uppercase font-semibold" to="/">
          Home
        </ActiveLink>
      </li>
      <li>
        <ActiveLink className="uppercase font-semibold" to="/instructors">
          Instructors
        </ActiveLink>
      </li>
      <li>
        <ActiveLink className="uppercase font-semibold" to="/classes">
          Classes
        </ActiveLink>
      </li>

      <li>
        <ActiveLink className="uppercase font-semibold" to="/contact">
          Contact us
        </ActiveLink>
      </li>
      {/* { pointerEvents: "none", backgroundColor: "grey" } */}
      {user && roleData?.role && (
        <li>
          <ActiveLink className="uppercase font-semibold" to={`/dashboard/${roleData?.role}`}>
            Dashboard
          </ActiveLink>
        </li>
      )}

      {user && roleData?.role === "student" && cartData?.length > 0 && (
        <li>
          <Link to="/dashboard/selectedClasses" className="p-0 bg-transparent hover:bg-transparent">
            <button className="btn btn-sm bg-transparent hover:bg-transparent">
              <span className="text-error">
                <FaShoppingCart></FaShoppingCart>
              </span>
              <div className="badge badge-success text-white">+{cartData?.length || 0}</div>
            </button>
          </Link>
        </li>
      )}
    </>
  );

  // handle logout
  const logOutUserHandler = async () => {
    setLogoutLoading(true);
    try {
      await logOutUser();
      setLogoutLoading(false);
      Navigate("/");
    } catch (error) {
      setLogoutLoading(false);
      console.log(error.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-20">
      <div className="">
        <div className="navbar px-10 border-b-2 h-20 bg-gradient-to-r from-lime-50 to-pink-200 border-purple-600">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ms-auto gap-2 z-20">
                {menuItems}
              </ul>
            </div>
            <Link to="/" className="uppercase hidden sm:inline-block">
              <div className="inline-flex flex-col">
                <h1 className="text-3xl tracking-tighter text-secondary bg-gradient-to-r from-pink-500 to-purple-200 bg-clip-text text-transparent">
                  FashionVerse
                </h1>
                <span className="tracking-[25px]">school</span>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">{menuItems}</ul>
          </div>
          <div className="navbar-end">
            <div className="inline-flex items-center gap-2">
              {user && user?.displayName && (
                <button title={user.displayName} className="inline-flex items-center">
                  <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </button>
              )}

              {user && !user?.displayName && (
                <button title="no user name" className="inline-flex items-center">
                  <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="http://placehold.it/32x32" />
                    </div>
                  </div>
                </button>
              )}

              {!user && (
                <Link to="/login">
                  <Button className="btn-secondary">login</Button>
                </Link>
              )}

              {user && (
                <Button className="btn-secondary" onClick={logOutUserHandler}>
                  {logoutLoading ? "loading" : "logout"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
