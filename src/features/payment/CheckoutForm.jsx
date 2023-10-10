import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import "./CheckoutForm.css";
import Swal from "sweetalert2";
import useCartData from "../../hooks/useCartData";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import useAuth from "../../hooks/useAuth";
// import useSelectedClassesData from "../../hooks/useSelectedClassesData";

// import "../styles/common.css";
const CheckoutForm = ({ price, cartData }) => {
  const { refetch } = useCartData();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const { axiosSecure } = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    // console.log("card", card);

    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
      setTransactionId("");
    } else {
      setCardError("");
    }

    // confirm card payment
    setProcessing(true);
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (intentError) {
      console.log(intentError);
    }
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      console.log("paymentIntent", paymentIntent);

      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cartData.length,
        selectedIClassesIds: cartData.map((item) => item._id),
        classItemsIds: cartData.map((item) => item.selectedClassId),
        classNames: cartData.map((item) => item.className),
      };
      // console.log(payment);
      axiosSecure.post("/payments", payment).then((res) => {
        // console.log(res.data);
        if (res.data.insertResult.acknowledged) {
          refetch();
          Swal.fire({
            position: "center",
            title: "Payments success!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };
  return (
    <div className="mx-auto max-w-lg rounded border p-8">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#555",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="mt-4 text-right">
          <button
            className="btn-secondary btn-xs btn rounded"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className="text-warning">{cardError}</p>}
      {transactionId && (
        <p className="text-green-600">
          Transaction complete with transaction ID: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
