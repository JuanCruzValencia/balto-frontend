import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { FormEvent } from "react";
import { BrowserRest } from "@/utils/frontend/browser-rest";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

type StripeResponse = {
  payload: {
    client_secret: string;
  };
};

const PaymentForm: React.FC = () => {
  const { data: session } = useSession();
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe) return;

    const { error: submitError } = await elements!.submit();
    if (submitError) {
      console.log(submitError);
      return;
    }

    const res = await BrowserRest.post<StripeResponse>(
      "/payment",
      {
        total: 200,
      },
      {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      }
    );

    const { client_secret: clientSecret } = res.data.payload;

    if (!elements) return;

    const purchaseUrl = `${process.env.NEXT_API_URL}/carts/${session?.user?.cart}/purchase`;

    console.log(purchaseUrl);

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: purchaseUrl,
      },
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[600px] h-full bg-green rounded shadow-2xl text-center p-5 flex flex-col gap-2"
    >
      <span className="text-s underline w-full h-[30px] m-2 uppercase font-bold">
        Ingrese los datos de su tarjeta
      </span>
      <PaymentElement />
      <button className="text-s self-center bg-font w-full rounded text-white p-2 m-5 uppercase shadow-xl font-bold max-w-[200px]">
        Comprar
      </button>
    </form>
  );
};

export default PaymentForm;
