import { Helmet } from "react-helmet-async";
import useCartData from "../hooks/useCartData";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../ui/LoadingSpinner";
import { Outlet } from "react-router-dom";
import ActiveLink from "../ui/ActiveLink";
import {
  FaBook,
  FaBookOpen,
  FaBookReader,
  FaBox,
  FaCommentAlt,
  FaEnvelope,
  FaHistory,
  FaHome,
  FaPlus,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import BrandLogo from "../ui/BrandLogo";
import LogOutBtn from "../features/authentication/LogOutBtn";

const DashboardLayout = () => {
  const { roleData, roleDataLoading, roleDataError, isRoleDataError } =
    useRole();
  const { cartLoading, cartError, isCartError, cartData } = useCartData();
  const { user } = useAuth();
  // console.log(roleData);

  if (roleDataLoading || cartLoading) {
    return <LoadingSpinner />;
  }

  if (isRoleDataError || isCartError) {
    return (
      <p className="mt-10 text-center text-red-400">
        something went wrong ${roleDataError || cartError}
      </p>
    );
  }

  return (
    <div className="">
      <Helmet>
        <title>FashionVerse | DashboardLayout</title>
      </Helmet>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn-secondary drawer-button btn-xs btn mt-2 lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu h-full w-60 gap-2 bg-gradient-to-b from-base-100 to-pink-300 p-4 text-base-content sm:w-80">
            {/* brand logo */}
            <div className="mb-6">
              <BrandLogo isHidden={false} />
            </div>
            {user && roleData?.role === "student" && (
              <>
                <li>
                  <ActiveLink
                    className="font-semibold uppercase"
                    to="/dashboard/student"
                  >
                    <FaHome></FaHome>
                    <span>Student home</span>
                  </ActiveLink>
                </li>

                <li>
                  <ActiveLink
                    className="font-semibold uppercase"
                    to="/dashboard/enrolledClasses"
                  >
                    <FaBook />
                    <span>My Enrolled Classes</span>
                  </ActiveLink>
                </li>
                {user &&
                  roleData?.role === "student" &&
                  cartData?.length > 0 && (
                    <li>
                      <ActiveLink
                        className="font-semibold uppercase"
                        to="/dashboard/selectedClasses"
                      >
                        <FaBookOpen />
                        <span>My Selected Classes</span>
                        <span className="badge badge-success text-white">
                          +{cartData?.length || 0}
                        </span>
                      </ActiveLink>
                    </li>
                  )}
                <li>
                  <ActiveLink
                    className="font-semibold uppercase"
                    to="/dashboard/payment"
                  >
                    <FaWallet />
                    <span>Payment</span>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    className="font-semibold uppercase"
                    to="/dashboard/paymentHistory"
                  >
                    <FaHistory />
                    <span>Payment History</span>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    className="font-semibold uppercase"
                    to="/dashboard/addReview"
                  >
                    <FaCommentAlt />
                    <span>Add Review</span>
                  </ActiveLink>
                </li>
              </>
            )}

            {user && roleData?.role === "instructor" && (
              <>
                <li>
                  <ActiveLink
                    className="font-semibold uppercase"
                    to="/dashboard/instructor"
                  >
                    <FaHome />
                    <span>Instructor home</span>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    className="font-semibold uppercase"
                    to="/dashboard/addClass"
                  >
                    <FaPlus />
                    <span>Add Class</span>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    className="font-semibold uppercase"
                    to="/dashboard/instructorClasses"
                  >
                    <FaBookReader />
                    <span>My classes</span>
                  </ActiveLink>
                </li>
              </>
            )}

            {user && roleData?.role === "admin" && (
              <>
                <li>
                  <ActiveLink
                    className="font-semibold uppercase"
                    to="/dashboard/admin"
                  >
                    <FaHome />
                    <span>Admin home</span>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    className="font-semibold uppercase"
                    to="/dashboard/manageClasses"
                  >
                    <FaBox />
                    <span>Manage classes</span>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    className="font-semibold uppercase"
                    to="/dashboard/manageUsers"
                  >
                    <FaUsers />
                    <span>Manage users</span>
                  </ActiveLink>
                </li>
              </>
            )}

            <div className="divider"></div>

            <li>
              <ActiveLink className="font-semibold uppercase" to="/">
                <FaHome />
                <span>Home</span>
              </ActiveLink>
            </li>

            <li>
              <ActiveLink className="font-semibold uppercase" to="/contact">
                <FaEnvelope />
                <span>Contact</span>
              </ActiveLink>
            </li>

            <div className="mr-6 text-end">
              <LogOutBtn />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
