import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";
import Button from "../Button/Button";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>
    </>
  );

  return (
    <div className="">
      <Container>
        <div className="navbar bg-slate-200 p-0">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ms-auto">
                {menuItems}
              </ul>
            </div>
            <Link to="/" className="uppercase">
              <div className="inline-flex flex-col">
                <h1 className="text-3xl tracking-tighter">FashionVerse</h1>
                <span className="tracking-[7px]">school</span>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menuItems}</ul>
          </div>
          <div className="navbar-end">
            <div className="inline-flex items-center gap-2">
              <button className="inline-flex items-center">
                <div className="avatar">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </button>
              <Link to="/login">
                <Button>login</Button>
              </Link>
              <Button>logout</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
