import { Cart } from "@/interfaces";
import { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import Head from "next/head";
import { ServerRest } from "@/utils/backend/server-rest";
import CartFlexContainer from "@/components/carts/CartFlexContainer";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

interface PageProps {
  cart: Cart;
}

type CartResponse = {
  payload: Cart;
};

const CartPage: NextPage<PageProps> = ({ cart }) => {
  return (
    <>
      <Head>
        <title>Balto | Product Detail</title>
      </Head>
      <CartFlexContainer cart={cart} />
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

export default CartPage;
