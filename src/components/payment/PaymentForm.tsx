import getStripe from "@/utils/stripe/initStripe";
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { FormEvent } from "react";
import PayButton from "./PayButton";

const stripePromise = getStripe();

const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cartElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe?.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      console.log(error);
    } else {
      console.log("Compra realizada");

      cartElement!.clear();
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <PayButton total={200} />
      </form>
    </Elements>
  );
};

export default PaymentForm;
