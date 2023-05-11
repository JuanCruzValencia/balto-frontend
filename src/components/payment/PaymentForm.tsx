import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { FormEvent, useEffect } from "react";
import PayButton from "./PayButton";

const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (!stripe || !elements) return;

  //   const cartElement = elements.getElement(CardElement);

  //   const { error, paymentIntent } = await stripe?.confirmPayment({
  //     elements,
  //     redirect: "if_required",
  //   });

  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("Compra realizada");

  //     cartElement!.clear();
  //   }
  // };
  useEffect(() => {

  })

  return (
      <form
        // onSubmit={handleSubmit}
        className="w-[600px] h-[300px] items-center justify-center gap-10 p-10 bg-green"
      >
        <CardElement />
        <PayButton total={200} />
      </form>
  );
};

export default PaymentForm;

// import React, { useState, useEffect } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const totalPrice = 1400; // this means 14 usd and can also be calculated at the backend

// export const MyCheckoutForm = () => {
  
//   const [clientSecret, setClientSecret] = useState("");
//   const stripe = useStripe();
//   const elements = useElements();

//   // STEP 1: create a payment intent and getting the secret
//   useEffect(() => {
//     fetch("http://localhost:3001/create-payment-intent", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ price: totalPrice }),
//     })
//       .then(res => res.json())
//       .then((data) => {
//         setClientSecret(data.clientSecret);  // <-- setting the client secret here
//       });
//   }, []);

//   // STEP 2: make the payment after filling the form properly
//   const makePayment = async () => {
//      const payload = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });
//   }

//   return (
//     <form id="payment-form" onSubmit={makePayment}>
//       <CardElement id="card-element" onChange={handleChange} />
//       <button id="submit"> Pay Now </button>
//     </form>
//   );
// };
