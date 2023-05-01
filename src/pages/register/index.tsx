import Head from "next/head";
import { NextPage } from "next";
import RegisterComponent from "@/components/register/Register";

interface PageProps {}
const Register: NextPage<PageProps> = ({}) => {
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
