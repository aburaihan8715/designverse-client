import { Link, useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import Button from "../Button/Button";
import useAuth from "../../hooks/useAuth";
import ActiveLink from "../ActiveLink/ActiveLink";
import { FaShoppingCart } from "react-icons/fa";
import useSelectedClassesData from "../../hooks/useSelectedClassesData";
import useRole from "../../hooks/useRole";

const Header = () => {
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();
  const { selectedData } = useSelectedClassesData();
  const { data } = useRole();

  const menuItems = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/instructors">Instructors</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/classes">Classes</ActiveLink>
      </li>

      <li>
        <ActiveLink to="/contact">Contact us</ActiveLink>
      </li>

      {user && (
        <li>
          <ActiveLink to={`/dashboard/${data?.role}`}>Dashboard</ActiveLink>
        </li>
      )}

      <li>
        <Link to="/dashboard/mySelectedClasses" className="p-0 bg-transparent hover:bg-transparent">
          <button className="btn btn-sm bg-transparent hover:bg-transparent">
            <span className="text-error">
              <FaShoppingCart></FaShoppingCart>
            </span>
            <div className="badge badge-success text-white">+0{selectedData?.length}</div>
          </button>
        </Link>
      </li>
    </>
  );

  // handle logout
  const logOutUserHandler = () => {
    logOutUser()
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };

  return (
    <div className="sticky top-0 z-10">
      <Container>
        <div className="navbar bg-slate-200 p-4 border-b-2 border-purple-600">
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
            <Link to="/" className="uppercase">
              <div className="inline-flex flex-col">
                <h1 className="text-3xl tracking-tighter text-secondary">FashionVerse</h1>
                <span className="tracking-[25px]">school</span>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menuItems}</ul>
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
                  logout
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
