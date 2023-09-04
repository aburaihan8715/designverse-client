import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
import { FaBook, FaCalendar, FaShoppingCart, FaStar, FaWallet } from "react-icons/fa";

const InstructorHomePage = () => {
  const { user } = useAuth();
  return (
    <div className="px-5">
      <Helmet>
        <title>FashionVerse | InstructorHomePage</title>
      </Helmet>
      <div>
        <div className="mb-4">
          <h2 className="text-2xl capitalize">Hi, Welcome back!</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 border">
          <div className="flex text-white capitalize bg-green-200 py-8 px-24 gap-4 items-center rounded">
            <div className="text-3xl">
              <FaBook></FaBook>
            </div>
            <div className="">
              <div>205</div>
              <div>classes</div>
            </div>
          </div>

          <div className="flex text-white capitalize bg-orange-200 py-8 px-24 gap-4 items-center rounded">
            <div className="text-3xl">
              <FaBook></FaBook>
            </div>
            <div className="">
              <div>44</div>
              <div>students</div>
            </div>
          </div>

          <div className="flex text-white capitalize bg-purple-200 py-8 px-24 gap-4 items-center rounded">
            <div className="text-3xl">
              <FaBook></FaBook>
            </div>
            <div className="">
              <div>5</div>
              <div>denied</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 mt-4">
          <div className="bg-blue-50 sm:border-r-2  border-orange-300 p-8 ">
            <div className="flex justify-center">
              <div className="text-center">
                <div className="avatar ">
                  <div className="w-24 rounded-full ring-2 ring-offset-2	">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <div className="uppercase">{user?.displayName}</div>
              </div>
            </div>
          </div>

          <div className="bg-cyan-100 sm:border-l-2 border-orange-300 p-8">
            <h3 className="text-2xl">Your Activities</h3>
            <div className="flex gap-4 items-center text-blue-500">
              <span>
                <FaShoppingCart></FaShoppingCart>
              </span>
              <span>orders: 6</span>
            </div>

            <div className="flex gap-4 items-center text-green-500">
              <span>
                <FaStar></FaStar>
              </span>
              <span>reviews: 1</span>
            </div>

            <div className="flex gap-4 items-center text-yellow-500">
              <span>
                <FaCalendar></FaCalendar>
              </span>
              <span>enrolled: 1</span>
            </div>

            <div className="flex gap-4 items-center text-orange-500">
              <span>
                <FaWallet></FaWallet>
              </span>
              <span>payment: 1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorHomePage;
