import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import { Product } from "@/interfaces";
import { ServerRest } from "@/utils/backend/server-rest";
import ProductDetailCard from "@/components/products/ProductDetailCard";
import { authOptions } from "../api/auth/[...nextauth]";

interface PageProps {
  product: Product;
}

type ResponsePayload = {
  payload: Product;
};

const ProductDetailPage: NextPage<PageProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>Balto | Product Detail</title>
      </Head>
      <main>
        <ProductDetailCard product={product} />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session && session.user) {
    const { data: product } = await ServerRest.get<ResponsePayload>(
      `/api/products/${context.params!.pid}`,
      {
        headers: {
          Authorization: `Bearer ${session.user.token}`,
        },
      }
    );
    return {
      props: {
        product: product.payload,
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

export default ProductDetailPage;
