import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSpinner from "../ui/LoadingSpinner";
import SectionHeading from "../ui/SectionHeading";
import useCartData from "../hooks/useCartData";

const StudentSelectedClassesPage = () => {
  const { cartLoading, cartError, isCartError, cartData, refetch } = useCartData();

  // console.log(selectedData);
  const totalPrice = cartData?.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  // delete handler
  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://fashion-verse-server.vercel.app/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };

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
        <SectionHeading subHeading={`selected classes`} heading={`want to add more`}></SectionHeading>
        <div className="flex text-3xl space-x-20">
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
              <button className="btn btn-secondary">pay</button>
            </Link>
          </div>
        </div>

        {/* table */}
        <div className="overflow-x-auto mt-8">
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
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.classImage} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.className}</td>
                  <td className="">$ {item.price}</td>
                  <td className="">{item.instructorName}</td>
                  <th>
                    <button onClick={() => deleteHandler(item._id)} className="btn-sm btn btn-error text-white hover:bg-red-800">
                      <FaTrashAlt></FaTrashAlt>
                    </button>
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
