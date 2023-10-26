import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSpinner from "../ui/LoadingSpinner";
import SectionHeading from "../ui/SectionHeading";
import useCartData from "../hooks/useCartData";
import useAxiosSecure from "../hooks/useAxiosSecure";

const StudentSelectedClassesPage = () => {
  const { cartLoading, cartError, isCartError, cartData } = useCartData();

  // console.log(selectedData);
  const totalPrice = cartData?.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  if (cartLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (isCartError) {
    return <p>something went wrong {cartError}</p>;
  }
  return (
    <div className="">
      <Helmet>
        <title>Bistro | My selected class</title>
      </Helmet>
      <div>
        <SectionHeading
          subHeading={`selected classes`}
          heading={`want to add more`}
        ></SectionHeading>
        <div className="flex space-x-20 text-3xl">
          <div className="">
            <span>Total selected classes: </span>
            <span>{cartData?.length}</span>
          </div>
          <div>
            <span>Total Price: </span>
            <span>${totalPrice}</span>
          </div>
          <div>
            <Link to="/dashboard/payment">
              <button className="btn-secondary btn">pay</button>
            </Link>
          </div>
        </div>

        {/* table */}
        <div className="mt-8 overflow-x-auto">
          <table className="table border border-success">
            {/* head */}
            <thead className="capitalize">
              <tr className="border border-success">
                <th>#</th>
                <th>image</th>
                <th>name</th>
                <th>price</th>
                <th>instructor</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {/* row start */}
              {cartData?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.classImage} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.className}</td>
                  <td className="">$ {item.price}</td>
                  <td className="">{item.instructorName}</td>
                  <th>
                    <StudentSelectedClassDeleteBtn
                      key={item._id}
                      id={item._id}
                    />
                  </th>
                </tr>
              ))}
              {/* row end */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentSelectedClassesPage;

//student selected class delete button component
const StudentSelectedClassDeleteBtn = ({ id }) => {
  const { refetch } = useCartData();
  const { axiosSecure } = useAxiosSecure();

  // delete handler
  const deleteHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`http://localhost:5000/cart/${id}`)

          .then((res) => {
            refetch();
            if (res.data.deletedCount > 0) {
              Swal.fire("Class has been deleted.!");
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };

  return (
    <button
      onClick={deleteHandler}
      className="btn-error btn-sm btn text-white hover:bg-red-800"
    >
      <FaTrashAlt></FaTrashAlt>
    </button>
  );
};
