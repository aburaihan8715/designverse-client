import { Helmet } from "react-helmet-async";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionHeading from "../ui/SectionHeading";
import CheckoutForm from "../features/payment/CheckoutForm";
import useCartData from "../hooks/useCartData";

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK);
const PaymentPage = () => {
  const { cartData } = useCartData();

  const total = cartData?.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);
  const price = Number(total.toFixed(2));

  return (
    <div className="px-2 w-full">
      <Helmet>
        <title>FashionVerse | PaymentPage</title>
      </Helmet>
      <div className="border mt-2 py-10 px-2 sm:max-w-2xl mx-auto shadow-lg">
        <SectionHeading subHeading={`please process`} heading={`payment`}></SectionHeading>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} cartData={cartData}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default PaymentPage;
