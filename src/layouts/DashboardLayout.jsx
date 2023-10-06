import { Helmet } from "react-helmet-async";
import useCartData from "../hooks/useCartData";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../ui/LoadingSpinner";
import { Outlet } from "react-router-dom";
import ActiveLink from "../ui/ActiveLink";
import { FaBook, FaBookOpen, FaBookReader, FaBox, FaEnvelope, FaHome, FaPlus, FaUsers, FaWallet } from "react-icons/fa";

const DashboardLayout = () => {
  const { roleData, roleDataLoading, roleDataError, isRoleDataError } = useRole();
  const { cartLoading, cartError, isCartError, cartData } = useCartData();
  // console.log(roleData);

  if (roleDataLoading || cartLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (isRoleDataError || isCartError) {
    return <p className="text-red-400 text-center mt-10">something went wrong ${roleDataError || cartError}</p>;
  }

  return (
    <div className="">
      <Helmet>
        <title>FashionVerse | DashboardLayout</title>
      </Helmet>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label htmlFor="my-drawer-2" className="btn btn-secondary btn-xs drawer-button lg:hidden self-end mt-2">
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full text-base-content bg-orange-50 gap-2">
            {roleData?.role === "student" && (
              <>
                <li>
                  <ActiveLink to="/dashboard/student">
                    <FaHome></FaHome>
                    <span>Student home</span>
                  </ActiveLink>
                </li>

                <li>
                  <ActiveLink to="/dashboard/enrolledClasses">
                    <FaBook />
                    <span>My Enrolled Classes</span>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink className="" to="/dashboard/selectedClasses">
                    <FaBookOpen />
                    <span>My Selected Classes</span>
                    <span className="badge badge-success text-white">+{cartData?.length || 0}</span>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/dashboard/payment">
                    <FaWallet />
                    <span>Payment</span>
                  </ActiveLink>
                </li>
              </>
            )}

            {roleData?.role === "instructor" && (
              <>
                <li>
                  <ActiveLink to="/dashboard/instructor">
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
                  <ActiveLink to="/dashboard/instructorClasses">
                    <FaBookReader />
                    <span>My classes</span>
                  </ActiveLink>
                </li>
              </>
            )}

            {roleData?.role === "admin" && (
              <>
                <li>
                  <ActiveLink to="/dashboard/admin">
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
            )}

            <div className="divider"></div>

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
