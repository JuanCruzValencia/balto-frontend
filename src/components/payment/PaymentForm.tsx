import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { BrowserRest } from "@/utils/frontend/browser-rest";
import { RESPONSE_STATUS } from "@/interfaces";
import { useSession } from "next-auth/react";

type StripeResponse = {
  payload: {
    "client-secret": string;
  };
};

const PaymentForm: React.FC = () => {
  const { data: session } = useSession();
  const [stripeScret, setStripeSecret] = useState<string>();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (session) {
      const getClientSecret = async () => {
        const response = await BrowserRest.post<StripeResponse>(
          "/payment",
          {
            total: 200,
          },
          {
            headers: {
              Authorization: `Bearer ${session.user?.token}`,
            },
          }
        );

        if (response.status === RESPONSE_STATUS.SUCCESS) {
          setStripeSecret(response.data.payload["client-secret"]); //TODO modify backend to get the object
        }
      };
      getClientSecret();
    }
  }, [session]);

  const makePayment = async () => {
    const payload = await stripe?.confirmCardPayment(stripeScret!, {
      payment_method: {
        card: elements?.getElement(CardElement)!,
      },
    });
    console.log(payload);
  };

  return (
    <form
      onSubmit={makePayment}
      className="w-[600px] h-[300px] items-center justify-center gap-10 p-10 bg-green"
    >
      <CardElement />
      <button>Comprar</button>
    </form>
  );
};

export default PaymentForm;
