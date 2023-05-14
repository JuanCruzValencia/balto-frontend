import getStripe from "@/utils/stripe/initStripe";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions } from "@stripe/stripe-js";
import { useCartTotal } from "@/hooks";

type Props = {
  children: React.ReactNode;
};

const PaymentContainer: React.FC<Props> = ({ children }) => {
  const stripePromise = getStripe();
  const total = useCartTotal();

  console.log(total);

  const options: StripeElementsOptions = {
    mode: "payment",
    currency: "usd",
    amount: 1099,
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
