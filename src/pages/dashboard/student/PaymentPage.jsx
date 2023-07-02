import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useSelectedClassesData from "../../../hooks/useSelectedClassesData";

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK);
const PaymentPage = () => {
  const { selectedData } = useSelectedClassesData();
  const total = selectedData?.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);
  const price = Number(total.toFixed(2));

  return (
    <div className="w-full">
      <Helmet>
        <title>FashionVerse | PaymentPage</title>
      </Helmet>
      <SectionHeading subHeading={`please process`} heading={`payment`}></SectionHeading>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} selectedData={selectedData}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default PaymentPage;
