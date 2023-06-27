import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import InstructorsPage from "../pages/InstructorsPage/InstructorsPage";
import ClassesPage from "../pages/ClassesPage/ClassesPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import DashboardLayout from "../layouts/DashboardLayout";
import MyEnrolledClassesPage from "../pages/dashboard/student/MyEnrolledClassesPage";
import MySelectedClassesPage from "../pages/dashboard/student/MySelectedClassesPage";
import PaymentPage from "../pages/dashboard/student/PaymentPage";
import AddClassPage from "../pages/dashboard/instructor/AddClassPage";
import MyClassesPage from "../pages/dashboard/instructor/MyClassesPage";
import ManageClassesPage from "../pages/dashboard/admin/ManageClassesPage";
import ManageUsersPage from "../pages/dashboard/admin/ManageUsersPage";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";
import StudentHomePage from "../pages/dashboard/student/StudentHomePage";
import InstructorHomePage from "../pages/dashboard/instructor/InstructorHomePage";
import AdminHomePage from "../pages/dashboard/admin/AdminHomePage";
import SeeClasses from "../pages/SeeClasses/SeeClasses";
import Test from "../pages/Test";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
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
        path: "seeClasses",
        element: <SeeClasses></SeeClasses>,
      },
      {
        path: "test",
        element: (
          <PrivateRoute>
            <Test></Test>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      // student routes
      {
        path: "studentHome",
        element: <StudentHomePage></StudentHomePage>,
      },
      {
        path: "myEnrolledClasses",
        element: <MyEnrolledClassesPage></MyEnrolledClassesPage>,
      },
      {
        path: "mySelectedClasses",
        element: <MySelectedClassesPage></MySelectedClassesPage>,
      },
      {
        path: "payment",
        element: <PaymentPage></PaymentPage>,
      },
      // instructors routes
      {
        path: "instructorHome",
        element: <InstructorHomePage></InstructorHomePage>,
      },
      {
        path: "addClass",
        element: <AddClassPage></AddClassPage>,
      },
      {
        path: "myClasses",
        element: <MyClassesPage></MyClassesPage>,
      },
      // admin routes
      {
        path: "adminHome",
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
