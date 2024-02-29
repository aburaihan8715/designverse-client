import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes.jsx";
import UserAuthContextProvider from "./contexts/UserAuthContext.jsx";

// import { HelmetProvider } from "react-helmet-async";
// import AuthProvider from "./contexts/AuthProvider";
// import { QueryClient, QueryClientProvider } from "react-query";
// const queryClient = new QueryClient();

// ==aos==
// import AOS from "aos";
// import "aos/dist/aos.css"; // You can also use <link> for styles
// import FeedbackIdContextProvider from "./contexts/FeedbackIdContext";
// import ModalOpenContextProvider from "./contexts/ModalOpenContext";
// import ReviewIdContextProvider from "./contexts/ReviewIdContext";
// AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>,
);
