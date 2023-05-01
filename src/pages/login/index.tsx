import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import LoginComponent from "@/components/login/Login";
import { authOptions } from "../api/auth/[...nextauth]";

interface PageProps {}

const Login: NextPage = ({}: PageProps) => {
  return (
    <>
      <Head>
        <title>Balto | Login</title>
      </Head>
      <main>
        <LoginComponent />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default Login;
