import getStripe from "@/utils/stripe/initStripe";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions } from "@stripe/stripe-js";

type Props = {
  children: React.ReactNode;
};

const PaymentContainer: React.FC<Props> = ({ children }) => {
  const stripePromise = getStripe();

  const options: StripeElementsOptions = {
    mode: "payment",
    currency: "usd",
    amount: 1000,
  };

  return (
    <>
      <Elements stripe={stripePromise} options={options}>
        {children}
      </Elements>
    </>
  );
};

export default PaymentContainer;
