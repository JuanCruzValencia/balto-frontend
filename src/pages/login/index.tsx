import LoginComponent from "@/components/login/Login";
import { NextPage } from "next";
import Head from "next/head";

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

export default Login;
