import { Helmet } from "react-helmet-async";
import { FaBook, FaCalendarCheck, FaUsers, FaWallet } from "react-icons/fa";
import ShapeBarChart from "./ShapeBarChart";
import CustomPieChart from "./CustomPieChart";

const AdminHomePage = () => {
  return (
    <div className="ml-4">
      <Helmet>
        <title>FashionVerse | AdminHomePage</title>
      </Helmet>
      <div>
        <div className="mb-4">
          <h2 className="text-2xl capitalize">Hi, Welcome back!</h2>
        </div>

        <div className="grid sm:grid-cols-4 gap-4">
          <div className="flex text-white capitalize bg-green-200 p-8 gap-4 items-center rounded">
            <div className="text-3xl">
              <FaWallet></FaWallet>
            </div>
            <div className="">
              <div>1000</div>
              <div>Revenue</div>
            </div>
          </div>

          <div className="flex text-white capitalize bg-orange-200 p-8 gap-4 items-center rounded">
            <div className="text-3xl">
              <FaUsers></FaUsers>
            </div>
            <div className="">
              <div>500</div>
              <div>students</div>
            </div>
          </div>

          <div className="flex text-white capitalize bg-purple-200 p-8 gap-4 items-center rounded">
            <div className="text-3xl">
              <FaBook></FaBook>
            </div>
            <div className="">
              <div>24</div>
              <div>classes</div>
            </div>
          </div>

          <div className="flex text-white capitalize bg-purple-200 p-8 gap-4 items-center rounded">
            <div className="text-3xl">
              <FaCalendarCheck></FaCalendarCheck>
            </div>
            <div className="">
              <div>600</div>
              <div>enrolled</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 mt-4">
          <div className="bg-blue-50  border-orange-300 p-8 ">
            <ShapeBarChart></ShapeBarChart>
          </div>

          <div className="bg-cyan-100  border-orange-300 p-8">
            <CustomPieChart></CustomPieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
