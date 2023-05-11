import PaymentForm from "@/components/payment/PaymentForm";
import getStripe from "@/utils/stripe/initStripe";
import { Elements } from "@stripe/react-stripe-js";
import { NextPage } from "next";
import Head from "next/head";

const testForm: NextPage = () => {
  const stripePromise = getStripe();

  return (
    <>
      <Head>
        <title>Balto | Test Component</title>
      </Head>
      <main>
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      </main>
    </>
  );
};

export default testForm;
