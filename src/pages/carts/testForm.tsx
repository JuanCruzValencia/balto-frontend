import PaymentContainer from "@/components/payment/PaymentContainer";
import PaymentForm from "@/components/payment/PaymentForm";
import { NextPage } from "next";
import Head from "next/head";

const testForm: NextPage = () => {
  return (
    <>
      <Head>
        <title>Balto | Test Component</title>
      </Head>
      <main>
        <PaymentContainer>
          <PaymentForm />
        </PaymentContainer>
      </main>
    </>
  );
};

export default testForm;
