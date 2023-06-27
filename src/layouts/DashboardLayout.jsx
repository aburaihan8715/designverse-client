import { Outlet } from "react-router-dom";
import { FaBook, FaBookOpen, FaBookReader, FaBox, FaEnvelope, FaHome, FaPlus, FaUsers, FaWallet } from "react-icons/fa";
import ActiveLink from "../components/ActiveLink/ActiveLink";

const DashboardLayout = () => {
  // TODO: show nav options based on role
  return (
    <div className="">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-secondary btn-xs drawer-button lg:hidden self-end mt-2">
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full text-base-content bg-orange-50">
            {/* Sidebar content here */}
            {/* student navigation */}
            <>
              <li>
                <ActiveLink to="/dashboard/studentHome">
                  <FaHome></FaHome>
                  <span>Student home</span>
                </ActiveLink>
              </li>

              <li>
                <ActiveLink to="/dashboard/myEnrolledClasses">
                  <FaBook />
                  <span>My Enrolled Classes</span>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink to="/dashboard/mySelectedClasses">
                  <FaBookOpen />
                  <span>My Selected Classes</span>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink to="/dashboard/payment">
                  <FaWallet />
                  <span>Payment</span>
                </ActiveLink>
              </li>
            </>

            {/* instructor navigation */}
            <>
              <li>
                <ActiveLink to="/dashboard/instructorHome">
                  <FaHome />
                  <span>Instructor home</span>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink to="/dashboard/addClass">
                  <FaPlus />
                  <span>Add Class</span>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink to="/dashboard/myClasses">
                  <FaBookReader />
                  <span>My classes</span>
                </ActiveLink>
              </li>
            </>
            {/* admin navigation */}

            <>
              <li>
                <ActiveLink to="/dashboard/adminHome">
                  <FaHome />
                  <span>Admin home</span>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink to="/dashboard/manageClasses">
                  <FaBox />
                  <span>Manage classes</span>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink to="/dashboard/manageUsers">
                  <FaUsers />
                  <span>Manage users</span>
                </ActiveLink>
              </li>
            </>

            {/* --------divider---------- */}
            <div className="divider"></div>
            {/* common navigation */}
            <li>
              <ActiveLink to="/">
                <FaHome />
                <span>Home</span>
              </ActiveLink>
            </li>

            <li>
              <ActiveLink to="/contact">
                <FaEnvelope />
                <span>Contact</span>
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
