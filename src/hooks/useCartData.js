import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCartData = () => {
  const { user, authLoading } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const {
    isLoading: cartLoading,
    error: cartError,
    isError: isCartError,
    data: cartData = [],
    refetch,
  } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !authLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart?email=${user?.email}`);
      return res.data;
    },
  });

  return { cartLoading, cartError, isCartError, cartData, refetch };
};

export default useCartData;
