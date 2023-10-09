import { Helmet } from "react-helmet-async";
import { FaBook, FaCalendarCheck, FaUsers, FaWallet } from "react-icons/fa";
import ShapeBarChart from "../features/dashboard/ShapeBarChart";
import CustomPieChart from "../features/dashboard/CustomPieChart";

const AdminHomePage = () => {
  return (
    <div className="px-4">
      <Helmet>
        <title>FashionVerse | AdminHomePage</title>
      </Helmet>
      <div>
        <div className="mb-4">
          <h2 className="text-2xl capitalize">Hi, Welcome back!</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-4">
          <div className="flex items-center gap-4 rounded bg-green-200 p-8 capitalize text-white">
            <div className="text-3xl">
              <FaWallet></FaWallet>
            </div>
            <div className="">
              <div>1000</div>
              <div>Revenue</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded bg-orange-200 p-8 capitalize text-white">
            <div className="text-3xl">
              <FaUsers></FaUsers>
            </div>
            <div className="">
              <div>500</div>
              <div>students</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded bg-purple-200 p-8 capitalize text-white">
            <div className="text-3xl">
              <FaBook></FaBook>
            </div>
            <div className="">
              <div>24</div>
              <div>classes</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded bg-purple-200 p-8 capitalize text-white">
            <div className="text-3xl">
              <FaCalendarCheck></FaCalendarCheck>
            </div>
            <div className="">
              <div>600</div>
              <div>enrolled</div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 rounded border p-2 sm:grid-cols-2">
          <div className="rounded  border-orange-300 bg-blue-50 p-4">
            <ShapeBarChart></ShapeBarChart>
          </div>

          <div className="rounded  border-orange-300 bg-cyan-100 p-4">
            <CustomPieChart></CustomPieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
