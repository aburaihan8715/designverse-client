import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
// import Footer from "../components/Footer/Footer";
// import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header></Header>
      <div className="mt-20">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
