import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import { Product } from "@/interfaces";
import { authOptions } from "./api/auth/[...nextauth]";
import { ServerRest } from "@/utils/backend/server-rest";
import ProductsFlexComponent from "@/components/products/ProductsFlexComponent";

interface PageProps {
  products: Product[];
}

type ResponsePayload = {
  payload: Product[];
};

const Home: NextPage<PageProps> = ({ products }) => {
  return (
    <>
      <Head>
        <title>Balto | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex items-center justify-center gap-2">
          <div className="w-[30px] h-[1px] bg-black"></div>
          <h2>Our Products</h2>
        </div>
        <ProductsFlexComponent products={products} />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session && session.user) {
    const { data: products } = await ServerRest.get<ResponsePayload>(
      "/api/products",
      {
        headers: { Authorization: `Bearer ${session.user.token}` },
      }
    );

    return {
      props: {
        products: products.payload,
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

export default Home;
