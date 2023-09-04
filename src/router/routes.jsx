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

// function for dynamic home route
const router = createBrowserRouter([
  {
    element: <MainLayout></MainLayout>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "instructors",
        element: <InstructorsPage></InstructorsPage>,
      },

      {
        path: "classes",
        element: <ClassesPage></ClassesPage>,
      },
      {
        path: "login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "signUp",
        element: <SignUpPage></SignUpPage>,
      },
      {
        path: "contact",
        element: <ContactUsPage></ContactUsPage>,
      },
      {
        path: "seeClasses/:id",
        element: <SeeInstructorClasses />,
      },
    ],
  },

  // dashboard layout
  {
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      // student routes
      {
        path: "dashboard/student",
        element: <StudentHomePage></StudentHomePage>,
      },
      {
        path: "dashboard/myEnrolledClasses",
        element: <StudentEnrolledClassesPage></StudentEnrolledClassesPage>,
      },
      {
        path: "dashboard/mySelectedClasses",
        element: (
          <PrivateRoute>
            <StudentSelectedClassesPage></StudentSelectedClassesPage>
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard/payment",
        element: <PaymentPage></PaymentPage>,
      },
      // instructors routes
      {
        path: "dashboard/instructor",
        element: <InstructorHomePage></InstructorHomePage>,
      },
      {
        path: "dashboard/addClass",
        element: <AddClassPage></AddClassPage>,
      },
      {
        path: "dashboard/myClasses",
        element: <InstructorMyClassesPage />,
      },
      // admin routes
      {
        path: "dashboard/admin",
        element: <AdminHomePage></AdminHomePage>,
      },
      {
        path: "dashboard/manageClasses",
        element: <ManageClassesPage></ManageClassesPage>,
      },
      {
        path: "dashboard/manageUsers",
        element: <ManageUsersPage></ManageUsersPage>,
      },
    ],
  },
]);

export default router;
