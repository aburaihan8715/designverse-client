import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
/*
import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import ScrollToTop from "react-scroll-to-top";
// import Footer from "../components/Footer/Footer";
// import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop color="#fff" style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "#8E28C9" }} smooth />
      <div className="flex flex-col justify-between min-h-screen">
        <Header></Header>
        <div className="mt-20">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
*/
