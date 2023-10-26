import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
import {
  FaBook,
  FaCalendar,
  FaShoppingCart,
  FaStar,
  FaWallet,
} from "react-icons/fa";

const InstructorHomePage = () => {
  const { user } = useAuth();
  return (
    <div className="px-5">
      <Helmet>
        <title>FashionVerse | InstructorHomePage</title>
      </Helmet>
      <div>
        <div className="mb-4">
          <h2 className="text-2xl capitalize">Welcome {user?.displayName}</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <div className="flex items-center gap-4 rounded bg-green-200 px-24 py-8 capitalize text-white">
            <div className="text-3xl">
              <FaBook></FaBook>
            </div>
            <div className="">
              <div>205</div>
              <div>classes</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded bg-orange-200 px-24 py-8 capitalize text-white">
            <div className="text-3xl">
              <FaBook></FaBook>
            </div>
            <div className="">
              <div>44</div>
              <div>students</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded bg-purple-200 px-24 py-8 capitalize text-white">
            <div className="text-3xl">
              <FaBook></FaBook>
            </div>
            <div className="">
              <div>5</div>
              <div>denied</div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded border-orange-300 bg-blue-50 p-8 sm:border-l-2">
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

          <div className="rounded border-orange-300 bg-cyan-100 p-8 sm:border-l-2">
            <h3 className="text-2xl">Your Activities</h3>
            <div className="flex items-center gap-4 text-blue-500">
              <span>
                <FaShoppingCart></FaShoppingCart>
              </span>
              <span>orders: 6</span>
            </div>

            <div className="flex items-center gap-4 text-green-500">
              <span>
                <FaStar></FaStar>
              </span>
              <span>reviews: 1</span>
            </div>

            <div className="flex items-center gap-4 text-yellow-500">
              <span>
                <FaCalendar></FaCalendar>
              </span>
              <span>enrolled: 1</span>
            </div>

            <div className="flex items-center gap-4 text-orange-500">
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
