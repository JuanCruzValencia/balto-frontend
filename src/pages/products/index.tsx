import { Product } from "@/interfaces";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import ProductsComponent from "@/components/products/Products";
import { ServerRest } from "@/utils/backend/server-rest";
import { getServerSession } from "next-auth";
import NextAuth from "../api/auth/[...nextAuth]";

interface PageProps {
  products: Product[];
}

const Products: NextPage<PageProps> = ({ products }) => {
  return (
    <>
      <Head>
        <title>Balto | Products</title>
      </Head>
      <ProductsComponent products={products} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, NextAuth);

  if (session && session.user) {
    const { data: products } = await ServerRest.get("/products", {
      headers: { Authorization: `Bearer ${session.user.token}` },
    });
    return {
      props: {
        products: products.data,
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

export default Products;
