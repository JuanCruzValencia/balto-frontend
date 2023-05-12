import { RESPONSE_STATUS } from "@/interfaces";
import { BrowserRest } from "@/utils/frontend/browser-rest";
import getStripe from "@/utils/stripe/initStripe";
import { Elements } from "@stripe/react-stripe-js";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type StripeResponse = {
  payload: {
    client_secret: string;
  };
};  

const PaymentContainer: React.FC<Props> = ({ children }) => {
  const stripePromise = getStripe();
  const { data: session } = useSession();
  const [stripeScret, setStripeSecret] = useState<string>();

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
          setStripeSecret(response.data.payload.client_secret);
        }
      };
      getClientSecret();
    }
  }, [session]);

  const options = {
    clientSecret: stripeScret,
    appearance: {
      /*...*/
    },
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
