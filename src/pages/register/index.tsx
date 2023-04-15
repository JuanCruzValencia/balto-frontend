import RegisterComponent from "@/components/register/Register";
import { NextPage } from "next";
import Head from "next/head";

interface PageProps {}
const Register: NextPage = ({}: PageProps) => {
  return (
    <>
      <Head>
        <title>Balto | Register</title>
      </Head>
      <main>
        <RegisterComponent />
      </main>
    </>
  );
};

export default Register;
