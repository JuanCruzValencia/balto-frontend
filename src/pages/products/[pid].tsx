import { Product } from "@/interfaces";
import { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import Head from "next/head";
import { ServerRest } from "@/utils/backend/server-rest";
import { authOptions } from "../api/auth/[...nextauth]";

interface PageProps {
  product: Product;
}

const Product: NextPage<PageProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>Balto | Product Detail</title>
      </Head>
      {product}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session && session.user) {
    const { data: product } = await ServerRest.get<Product>(
      `/products/${context.params!.pid}`,
      {
        headers: {
          Authorization: `Bearer ${session.user.token}`,
        },
      }
    );
    return {
      props: {
        product: product,
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

export default Product;
