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

    const { client_secret: clientSecret } = await res.data.payload;

    if (!elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${process.env.NEXT_API_URL}/carts/${session?.user?.cart}/purchase`,
      },
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[600px] h-[300px] text-center p-10 bg-white"
    >
      <span className="text-s w-full h-[30px] p-2  uppercase font-bold">
        Ingrese los datos de su tarjeta
      </span>
      <PaymentElement />
      <button className="text-s bg-font w-full rounded text-white p-2 m-5 uppercase shadow-xl font-bold max-w-[200px]">
        Comprar
      </button>
    </form>
  );
};

export default PaymentForm;

// useEffect(() => {
//   if (session) {
//     const getClientSecret = async () => {
//       const response = await BrowserRest.post<StripeResponse>(
//         "/payment",
//         {
//           total: 200,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${session.user?.token}`,
//           },
//         }
//       );

//       if (response.status === RESPONSE_STATUS.SUCCESS) {
//         setStripeSecret(response.data.payload.client_secret);
//       }
//     };
//     getClientSecret();
//   }
// }, [session]);

// const makePayment = async (e: FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   const el = elements?.getElement(CardElement);
//   console.log(el);

//   const payload = await stripe?.confirmCardPayment(stripeScret!, {
//     payment_method: {
//       card: elements?.getElement(CardElement)!,
//     },
//   });

//   if (payload?.paymentIntent?.status === STRIPE_STATUS.SUCCESS) {
//     router.push(`/carts/${session?.user?.cart}/purchase`);
//   } else {
//     router.push(`/carts/${session?.user?.cart}`);
//   }
// };

// const CARD_ELEMENT_OPTIONS = {
//   style: {
//     base: {
//       color: "#32325d",
//       fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
//       fontSmoothing: "antialiased",
//       fontSize: "16px",
//       "::placeholder": {
//         color: "#aab7c4",
//       },
//     },
//     invalid: {
//       color: "#fa755a",
//       iconColor: "#fa755a",
//     },
//   },
// };

// <CardElement options={CARD_ELEMENT_OPTIONS} />

// const [stripeScret, setStripeSecret] = useState<string>();
