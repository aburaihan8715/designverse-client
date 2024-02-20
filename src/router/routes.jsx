import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import AllCoursesPage from "../pages/AllCoursesPage";
import AllInstructorsPage from "../pages/AllInstructorsPage";
import ContactPage from "../pages/ContactPage";
import DashboardLayout from "../layouts/DashboardLayout";
import UserDashboardPage from "../pages/dashboardPages/UserDashboardPage";
import InstructorDashboardPage from "../pages/dashboardPages/InstructorDashboardPage";
import AdminDashboardPage from "../pages/dashboardPages/AdminDashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "courses",
        element: <AllCoursesPage />,
      },
      {
        path: "instructors",
        element: <AllInstructorsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },

  // dashboard routes
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "user",
        element: <UserDashboardPage />,
      },
      {
        path: "instructor",
        element: <InstructorDashboardPage />,
      },
      {
        path: "admin",
        element: <AdminDashboardPage />,
      },
    ],
  },
]);

export default router;
/*
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import InstructorsPage from "../pages/InstructorsPage";
import ClassesPage from "../pages/ClassesPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import ContactUsPage from "../pages/ContactUsPage";
import SeeInstructorClasses from "../pages/SeeInstructorClasses";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import StudentHomePage from "../pages/StudentHomePage";
import StudentEnrolledClassesPage from "../pages/StudentEnrolledClassesPage";
import StudentSelectedClassesPage from "../pages/StudentSelectedClassesPage";
import PaymentPage from "../pages/PaymentPage";
import InstructorHomePage from "../pages/InstructorHomePage";
import AddClassPage from "../pages/AddClassPage";
import AdminHomePage from "../pages/AdminHomePage";
import ManageClassesPage from "../pages/ManageClassesPage";
import ManageUsersPage from "../pages/ManageUsersPage";
import InstructorMyClassesPage from "../pages/InstructorMyClassesPage";
import InstructorMyClassUpdatePage from "../pages/InstructorMyClassUpdatePage";
import PaymentHistoryPage from "../pages/PaymentHistoryPage";
import AddTestimonialPage from "../pages/AddTestimonialPage";
import ForgetPassword from "../pages/ForgetPassword";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";

// function for dynamic home route
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "instructors",
        element: <InstructorsPage />,
      },

      {
        path: "classes",
        element: <ClassesPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signUp",
        element: <SignUpPage />,
      },
      {
        path: "contact",
        element: <ContactUsPage />,
      },
      {
        path: "seeClasses/:email",
        element: <SeeInstructorClasses />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
    ],
  },

  // dashboard routes
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFoundPage />,
    children: [
      // student routes
      {
        path: "student",
        element: (
          <PrivateRoute>
            <StudentHomePage />
          </PrivateRoute>
        ),
      },
      {
        path: "enrolledClasses",
        element: (
          <PrivateRoute>
            <StudentEnrolledClassesPage />
          </PrivateRoute>
        ),
      },
      {
        path: "selectedClasses",
        element: (
          <PrivateRoute>
            <StudentSelectedClassesPage />
          </PrivateRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <PrivateRoute>
            <PaymentHistoryPage />
          </PrivateRoute>
        ),
      },
      {
        path: "addReview",
        element: (
          <PrivateRoute>
            <AddTestimonialPage />
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>
        ),
      },
      // instructors routes
      {
        path: "instructor",
        element: (
          <InstructorRoute>
            <InstructorHomePage />
          </InstructorRoute>
        ),
      },
      {
        path: "addClass",
        element: (
          <InstructorRoute>
            <AddClassPage />
          </InstructorRoute>
        ),
      },
      {
        path: "instructorClasses",
        element: (
          <InstructorRoute>
            <InstructorMyClassesPage />
          </InstructorRoute>
        ),
      },
      {
        path: "updateClass/:id",
        element: (
          <InstructorRoute>
            <InstructorMyClassUpdatePage />
          </InstructorRoute>
        ),
      },
      // admin routes
      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdminHomePage />
          </AdminRoute>
        ),
      },
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <ManageClassesPage />
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsersPage />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
*/
