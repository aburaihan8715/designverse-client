import { Helmet } from "react-helmet-async";
import { FaBook, FaShoppingCart, FaWallet } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useStudentEnrolledClass from "../hooks/useStudentEnrolledClass";
import LoadingSpinner from "../ui/LoadingSpinner";
import useClassesData from "../hooks/useClassesData";
import useCartData from "../hooks/useCartData";

const StudentHomePage = () => {
  const { authLoading, user } = useAuth();
  const { classesData, classesLoading, classesError, isClassesError } =
    useClassesData();
  const { cartLoading, cartError, isCartError, cartData } = useCartData();
  const {
    enrolledClassesDataLoading,
    enrolledClassesData,
    enrolledClassesDataError,
    isEnrolledClassesError,
  } = useStudentEnrolledClass();

  const enrolledClassesList = enrolledClassesData?.flat();
  const enrolledClassesIds = enrolledClassesList?.map((item) => {
    return item.selectedIClassesIds;
  });

  const enrolledIdsList = enrolledClassesIds?.flat();
  // total enrolled classes
  const totalEnrolledClasses = enrolledIdsList?.map((id) => {
    return classesData.filter((item) => item.classId === id)[0];
  });

  // total spend for classes
  const totalSpend = totalEnrolledClasses?.reduce((total, item) => {
    return total + item?.price;
  }, 0);

  if (
    enrolledClassesDataLoading ||
    authLoading ||
    classesLoading ||
    cartLoading
  ) {
    return <LoadingSpinner />;
  }

  if (
    enrolledClassesDataError ||
    isEnrolledClassesError ||
    isClassesError ||
    isCartError
  ) {
    return (
      <p>
        something went wrong $
        {enrolledClassesDataError.message ||
          classesError.message ||
          cartError.message}
      </p>
    );
  }

  return (
    <div className="px-5">
      <Helmet>
        <title>FashionVerse | StudentHomePage</title>
      </Helmet>
      <div>
        <div className="mb-4">
          <h2 className="text-2xl capitalize">Welcome {user?.displayName}</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-4 rounded bg-green-200 px-24 py-8 capitalize text-white">
            <div className="text-2xl text-orange-700">
              <FaBook></FaBook>
            </div>
            <div className="flex flex-col items-center justify-end">
              <div className="badge badge-secondary text-white">
                +{totalEnrolledClasses?.length || 0}
              </div>
              <div className="font-semibold text-secondary">Enrolled</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded bg-orange-200 px-24 py-8 capitalize text-white">
            <div className="text-2xl text-orange-700">
              <FaShoppingCart />
            </div>
            <div className="flex flex-col items-center justify-end ">
              <div className="badge badge-secondary text-white">
                +{cartData?.length || 0}
              </div>
              <div className="font-semibold text-secondary">cart</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded bg-purple-200 px-24 py-8 capitalize text-white">
            <div className="text-2xl text-orange-700">
              <FaWallet />
            </div>
            <div className="flex flex-col items-center justify-end ">
              <div className="badge badge-secondary text-white">
                $ {totalSpend || 0}
              </div>
              <div className="font-semibold text-secondary">Payment</div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded border-orange-300 bg-blue-50 p-8 sm:border-l-2 ">
            <div className="flex justify-center">
              <div className="text-center">
                <div className="avatar ">
                  <div className="w-24 rounded-full ring-2 ring-offset-2">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <div className="font-semibold uppercase text-secondary">
                  {user?.displayName}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded border-orange-300 bg-cyan-100 p-8 shadow-lg sm:border-l-2">
            <h3 className="text-2xl font-semibold text-secondary">Summary</h3>
            <div className="flex items-center gap-4 text-blue-500">
              <span>
                <FaShoppingCart></FaShoppingCart>
              </span>
              <span>cart={cartData?.length || 0}</span>
            </div>

            <div className="flex items-center gap-4 text-yellow-500">
              <span>
                <FaWallet />
              </span>
              <span>enrolled={totalEnrolledClasses?.length || 0}</span>
            </div>

            <div className="flex items-center gap-4 text-orange-500">
              <span>
                <FaWallet></FaWallet>
              </span>
              <span>payment=${totalSpend || 0}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHomePage;
