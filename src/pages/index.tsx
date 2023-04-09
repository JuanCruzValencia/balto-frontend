import ProductsComponent from "@/components/products/Products";
import { Product } from "@/interfaces";
import { ServerRest } from "@/utils/backend/server-rest";
import { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import Head from "next/head";
import { authOptions } from "./api/auth/[...nextauth]";

interface PageProps {
  products: Product[];
}

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
        <ProductsComponent products={products} />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session && session.user) {
    const { data: products } = await ServerRest.get("/api/products", {
      headers: { Authorization: `Bearer ${session.user.token}` },
    });

    console.log("products on client", products);

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
