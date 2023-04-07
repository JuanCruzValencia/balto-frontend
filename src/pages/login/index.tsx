import LoginComponent from "@/components/login/Login";
import { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import Head from "next/head";
import { authOptions } from "../api/auth/[...nextAuth]";

interface PageProps {}

const Login: NextPage = ({}: PageProps) => {
  return (
    <>
      <Head>
        <title>Balto | Login</title>
      </Head>
      <LoginComponent />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  console.log('session from login component', session);
  

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
