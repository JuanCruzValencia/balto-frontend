import PaymentContainer from "@/components/payment/PaymentContainer";
import PaymentForm from "@/components/payment/PaymentForm";
import { Cart } from "@/interfaces";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { ServerRest } from "@/utils/backend/server-rest";
import { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import Head from "next/head";

type PageProps = {
  cart: Cart;
};

type CartResponse = {
  payload: Cart;
};

const Payment: NextPage<PageProps> = ({ cart }) => {
  return (
    <>
      <Head>
        <title>Balto | Payment Component</title>
      </Head>
      <main>
        <PaymentContainer>
          <PaymentForm cart={cart} />
        </PaymentContainer>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session && session.user) {
    const { data: cart } = await ServerRest.get<CartResponse>(
      `/api/carts/${context.params!.cid}`,
      {
        headers: {
          Authorization: `Bearer ${session.user.token}`,
        },
      }
    );
    return {
      props: {
        cart: cart.payload,
      },
    };
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};

export default Payment;
