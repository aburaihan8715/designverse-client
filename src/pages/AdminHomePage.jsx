import { Helmet } from "react-helmet-async";
import { FaBook, FaChalkboardTeacher, FaUsers, FaWallet } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { removeDuplicateElement } from "../utils/utilities";
import useClassesData from "../hooks/useClassesData";
import useUsersData from "../hooks/useUsersData";

const AdminHomePage = () => {
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const { classesData } = useClassesData();
  const { users } = useUsersData();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const data = await axiosSecure.get(`/payments`);
      return data.data;
    },
  });

  // total revenue
  const revenue = payments?.reduce((total, item) => total + item.price, 0);
  const studentListByEmail = payments.map((item) => item.userEmail);
  // total student
  const totalStudent = removeDuplicateElement(studentListByEmail);

  // classes are approved by the admin
  const totalClasses = classesData?.filter(
    (item) => item.status === "approved",
  );

  const listOfClassName = classesData?.map((item) => item.className);
  console.log(listOfClassName);

  // total instructor
  const totalInstructor = users?.filter((item) => item.role === "instructor");

  return (
    <div className="px-4">
      <Helmet>
        <title>FashionVerse | AdminHomePage</title>
      </Helmet>
      <div>
        <div className="mb-4">
          <h2 className="text-2xl capitalize">Welcome {user?.displayName}</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-4">
          <div className="flex items-center gap-4 rounded bg-green-200 p-8 capitalize text-white">
            <div className="text-2xl text-orange-700">
              <FaWallet />
            </div>
            <div className="flex flex-col items-center justify-end">
              <div className="badge badge-secondary text-white">
                ${revenue ? revenue : 0}
              </div>
              <div className="font-semibold text-secondary">Revenue</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded bg-orange-200 p-8 capitalize text-white">
            <div className="text-2xl text-orange-700">
              <FaUsers />
            </div>
            <div className="flex flex-col items-center justify-end">
              <div className="badge badge-secondary text-white">
                +{totalStudent ? totalStudent.length : 0}
              </div>
              <div className="font-semibold text-secondary">students</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded bg-purple-200 p-8 capitalize text-white">
            <div className="text-2xl text-orange-700">
              <FaBook />
            </div>
            <div className="flex flex-col items-center justify-end">
              <div className="badge badge-secondary text-white">
                +{totalClasses ? totalClasses.length : 0}
              </div>
              <div className="font-semibold text-secondary">classes</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded bg-purple-200 p-8 capitalize text-white">
            <div className="text-2xl text-orange-700">
              <FaChalkboardTeacher />
            </div>
            <div className="flex flex-col items-center justify-end">
              <div className="badge badge-secondary text-white">
                +{totalInstructor ? totalInstructor.length : 0}
              </div>
              <div className="font-semibold text-secondary">Instructor</div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded border-orange-300 bg-blue-50 p-8 sm:border-l-2">
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
                <FaWallet />
              </span>
              <span>Revenue=${revenue ? revenue : 0}</span>
            </div>

            <div className="flex items-center gap-4 text-yellow-500">
              <span>
                <FaUsers />
              </span>
              <span>Students={totalStudent ? totalStudent.length : 0}</span>
            </div>

            <div className="flex items-center gap-4 text-orange-500">
              <span>
                <FaBook />
              </span>
              <span>Classes={totalClasses ? totalClasses.length : 0}</span>
            </div>

            <div className="flex items-center gap-4 text-orange-500">
              <span>
                <FaChalkboardTeacher />
              </span>
              <span>
                Instructor={totalInstructor ? totalInstructor.length : 0}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
