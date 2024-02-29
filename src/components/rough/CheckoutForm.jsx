const CheckoutForm = () => {
  return <div>CheckoutForm</div>;
};

export default CheckoutForm;
/*
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import "./CheckoutForm.css";
import Swal from "sweetalert2";
import useCartData from "../../hooks/useCartData";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import useClassesData from "../../hooks/useClassesData";

const CheckoutForm = ({ price, cartData }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const { refetch: classRefetch } = useClassesData();

  const { refetch } = useCartData();
  const stripe = useStripe();
  const elements = useElements();
  const { axiosSecure } = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;
    const card = elements.getElement(CardElement);
    if (card == null) return;
    // console.log(card);

    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
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
        paymentId: uuidv4(),
        userEmail: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cartData?.length,
        selectedIClassesIds: cartData?.map((item) => item.selectedClassId),
      };
      // console.log(payment);
      axiosSecure.post("/payments", payment).then((res) => {
        // console.log(res.data);
        if (res.data.insertResult.acknowledged) {
          refetch();
          // class data should be refetch
          classRefetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Payments success!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/dashboard/enrolledClasses");
      });
    }
  };
  return (
    <div className="max-w-lg p-8 mx-auto border rounded">
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
            className="rounded btn-secondary btn-sm btn"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            submit
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
*/
