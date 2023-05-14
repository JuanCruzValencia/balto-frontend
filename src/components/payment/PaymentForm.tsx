import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { FormEvent, useEffect, useState } from "react";
import { BrowserRest } from "@/utils/frontend/browser-rest";
import { useSession } from "next-auth/react";
import { Cart } from "@/interfaces";
import { cartTotals } from "../carts/utils";

type StripeResponse = {
  payload: {
    client_secret: string;
  };
};

type Props = {
  cart: Cart;
};

const PaymentForm: React.FC<Props> = ({ cart }) => {
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    const total = cartTotals(cart);

    setCartTotal(total);
  }, [cart]);

  const { data: session } = useSession();
  const stripe = useStripe();
  const elements = useElements();

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
        total: cartTotal | 100,
      },
      {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      }
    );

    const { client_secret: clientSecret } = res.data.payload;

    if (!elements) return;

    const purchaseUrl = `${process.env.NEXT_PUBLIC_NEXT_API_URL}/carts/${session?.user?.cart}/purchase`;

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
      <button className="text-s self-center bg-font w-full rounded text-white p-2 m-5 uppercase shadow-xl font-bold max-w-[200px] hover:bg-footer">
        Comprar
      </button>
    </form>
  );
};

export default PaymentForm;
