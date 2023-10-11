import { useQuery } from "react-query";
import LoadingSpinner from "../../ui/LoadingSpinner";
import ErrorMessage from "../../ui/ErrorMessage";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentHistoryTable = () => {
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  // console.log(user?.email);
  const {
    isLoading,
    error,
    data: paymentsData,
    isError,
  } = useQuery({
    queryKey: ["payments"],
    enabled: !!user,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `https://fashion-verse-server.vercel.app/payments?email=${user?.email}`,
      );
      return res.data;
    },
  });

  const totalCost = paymentsData?.reduce((total, item) => {
    return total + item.price;
  }, 0);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage>{error.message}</ErrorMessage>;

  return (
    <div>
      <div className="text-3xl">
        <div className="">
          <span>Total payments: </span>
          <span>{paymentsData?.length}</span>
        </div>

        <div className="">
          <span>Total cost: $ {totalCost} </span>
        </div>
      </div>

      {/* table */}
      <div className="mt-8 overflow-x-auto">
        <table className="table border border-success">
          {/* head */}
          <thead className="capitalize">
            <tr className="border border-success">
              <th>#</th>
              <th>Email</th>
              <th>Transaction id</th>
              <th>price</th>
              <th>payment date</th>
            </tr>
          </thead>
          <tbody>
            {/* row start */}
            {paymentsData?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.email}</td>
                <td>{item.transactionId}</td>
                <td className="">$ {item.price}</td>
                <td className="">{new Date(item.date).toLocaleDateString()}</td>
              </tr>
            ))}
            {/* row end */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistoryTable;
