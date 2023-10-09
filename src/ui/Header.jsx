import { Link, Navigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useCartData from "../hooks/useCartData";
import useRole from "../hooks/useRole";
import ActiveLink from "./ActiveLink";
import Button from "./Button";

const Header = () => {
  const { user, logOutUser } = useAuth();

  // const navigate = useNavigate();
  const { cartData } = useCartData();
  const { roleData } = useRole();
  // console.log(roleData);

  const menuItems = (
    <>
      <li>
        <ActiveLink className="font-semibold uppercase" to="/">
          Home
        </ActiveLink>
      </li>
      <li>
        <ActiveLink className="font-semibold uppercase" to="/instructors">
          Instructors
        </ActiveLink>
      </li>
      <li>
        <ActiveLink className="font-semibold uppercase" to="/classes">
          Classes
        </ActiveLink>
      </li>

      <li>
        <ActiveLink className="font-semibold uppercase" to="/contact">
          Contact us
        </ActiveLink>
      </li>
      {/* { pointerEvents: "none", backgroundColor: "grey" } */}
      {user && roleData?.role && (
        <li>
          <ActiveLink
            className="font-semibold uppercase"
            to={`/dashboard/${roleData?.role}`}
          >
            Dashboard
          </ActiveLink>
        </li>
      )}

      {user && roleData?.role === "student" && cartData?.length > 0 && (
        <li>
          <Link
            to="/dashboard/selectedClasses"
            className="bg-transparent p-0 hover:bg-transparent"
          >
            <button className="btn-sm btn bg-transparent hover:bg-transparent">
              <span className="text-error">
                <FaShoppingCart></FaShoppingCart>
              </span>
              <div className="badge badge-success text-white">
                +{cartData?.length || 0}
              </div>
            </button>
          </Link>
        </li>
      )}
    </>
  );

  // handle logout
  const logOutUserHandler = async () => {
    await logOutUser();
    Navigate("/");
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-20">
      <div className="">
        <div className="navbar h-20 border-b-2 border-purple-600 bg-gradient-to-r from-lime-50 to-pink-200 px-10">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn-ghost btn lg:hidden">
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
                className="dropdown-content menu rounded-box menu-sm z-20 ms-auto mt-3 w-52 gap-2 bg-base-100 p-2 shadow"
              >
                {menuItems}
              </ul>
            </div>
            <Link to="/" className="hidden uppercase sm:inline-block">
              <div className="inline-flex flex-col">
                <h1 className="bg-gradient-to-r from-pink-500 to-purple-200 bg-clip-text text-3xl tracking-tighter text-secondary text-transparent">
                  FashionVerse
                </h1>
                <span className="tracking-[25px]">school</span>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2 px-1">{menuItems}</ul>
          </div>
          <div className="navbar-end">
            <div className="inline-flex items-center gap-2">
              {user && user?.displayName && (
                <button
                  title={user.displayName}
                  className="inline-flex items-center"
                >
                  <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </button>
              )}

              {user && !user?.displayName && (
                <button
                  title="no user name"
                  className="inline-flex items-center"
                >
                  <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
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
                  logout
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
