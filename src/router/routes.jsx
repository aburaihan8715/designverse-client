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
        path: "seeClasses/:email",
        element: <SeeInstructorClasses />,
      },
    ],
  },

  // dashboard layout
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      // student routes
      {
        path: "student",
        element: <StudentHomePage></StudentHomePage>,
      },
      {
        path: "enrolledClasses",
        element: <StudentEnrolledClassesPage></StudentEnrolledClassesPage>,
      },
      {
        path: "selectedClasses",
        element: (
          <PrivateRoute>
            <StudentSelectedClassesPage></StudentSelectedClassesPage>
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: <PaymentPage></PaymentPage>,
      },
      // instructors routes
      {
        path: "instructor",
        element: <InstructorHomePage></InstructorHomePage>,
      },
      {
        path: "addClass",
        element: <AddClassPage></AddClassPage>,
      },
      {
        path: "instructorClasses",
        element: <InstructorMyClassesPage />,
      },
      {
        path: "updateClass/:id",
        element: <InstructorMyClassUpdatePage />,
      },
      // admin routes
      {
        path: "admin",
        element: <AdminHomePage></AdminHomePage>,
      },
      {
        path: "manageClasses",
        element: <ManageClassesPage></ManageClassesPage>,
      },
      {
        path: "manageUsers",
        element: <ManageUsersPage></ManageUsersPage>,
      },
    ],
  },
]);

export default router;
