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
import AddReviewPage from "../pages/AddReviewPage";

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
    ],
  },

  // dashboard layout
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFoundPage />,
    children: [
      // student routes
      {
        path: "student",
        element: <StudentHomePage />,
      },
      {
        path: "enrolledClasses",
        element: <StudentEnrolledClassesPage />,
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
        element: <PaymentHistoryPage />,
      },
      {
        path: "addReview",
        element: <AddReviewPage />,
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
      // instructors routes
      {
        path: "instructor",
        element: <InstructorHomePage />,
      },
      {
        path: "addClass",
        element: <AddClassPage />,
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
        element: <AdminHomePage />,
      },
      {
        path: "manageClasses",
        element: <ManageClassesPage />,
      },
      {
        path: "manageUsers",
        element: <ManageUsersPage />,
      },
    ],
  },
]);

export default router;
