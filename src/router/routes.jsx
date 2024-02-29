import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFoundPage from "../pages/mainPages/NotFoundPage";
import HomePage from "../pages/mainPages/HomePage";
import AllCoursesPage from "../pages/mainPages/AllCoursesPage";
import AllInstructorsPage from "../pages/mainPages/AllInstructorsPage";
import ContactPage from "../pages/mainPages/ContactPage";
import DashboardLayout from "../layouts/DashboardLayout";
import UserDashboardPage from "../pages/dashboardPages/UserDashboardPage";
import InstructorDashboardPage from "../pages/dashboardPages/InstructorDashboardPage";
import AdminDashboardPage from "../pages/dashboardPages/AdminDashboardPage";
import LoginPage from "../pages/mainPages/LoginPage";
import SignUpPage from "../pages/mainPages/SignUpPage";
import ForgetPasswordPage from "../pages/mainPages/ForgetPasswordPage";
import MyCartPage from "../pages/dashboardPages/MyCartPage";
import PaymentPage from "../pages/dashboardPages/PaymentPage";
import ManageCoursesPage from "../pages/dashboardPages/ManageCoursesPage";
import ManageUsersPage from "../pages/dashboardPages/ManageUsersPage";
import AddCoursePage from "../pages/dashboardPages/AddCoursePage";
import MyCoursesPage from "../pages/dashboardPages/MyCoursesPage";
import UpdateMyCourse from "../pages/dashboardPages/UpdateMyCourse";
import MyEnrollmentsPage from "../pages/dashboardPages/MyEnrollmentsPage";
import MyPaymentHistoryPage from "../pages/dashboardPages/MyPaymentHistoryPage";
import AddReviewPage from "../pages/dashboardPages/AddReviewPage";

// TODO:
// No need to create extra files for authentication routes and authorization routes
// All should be in one file (routes.jsx)

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      // MAIN ROUTES
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
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signUp",
        element: <SignUpPage />,
      },
      {
        path: "forgetPassword",
        element: <ForgetPasswordPage />,
      },
    ],
  },

  // DASHBOARD ROUTES
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFoundPage />,
    children: [
      // USER ROUTES
      {
        path: "user",
        element: <UserDashboardPage />,
      },
      {
        path: "myCart",
        element: <MyCartPage />,
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
      {
        path: "myPaymentHistory",
        element: <MyPaymentHistoryPage />,
      },
      {
        path: "myEnrollments",
        element: <MyEnrollmentsPage />,
      },
      {
        path: "addReview",
        element: <AddReviewPage />,
      },

      // INSTRUCTOR ROUTES
      {
        path: "instructor",
        element: <InstructorDashboardPage />,
      },
      {
        path: "addCourse",
        element: <AddCoursePage />,
      },
      {
        path: "myCourses",
        element: <MyCoursesPage />,
      },
      {
        path: "updateMyCourse/:id",
        element: <UpdateMyCourse />,
      },

      // ADMIN ROUTES
      {
        path: "admin",
        element: <AdminDashboardPage />,
      },
      {
        path: "manageCourses",
        element: <ManageCoursesPage />,
      },
      {
        path: "manageUsers",
        element: <ManageUsersPage />,
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
