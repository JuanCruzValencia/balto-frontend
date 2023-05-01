import ResetPasswordForm from "@/components/restore/ResetPasswordForm";
import { NextPage } from "next";
import Head from "next/head";

const RestorePassword: NextPage = () => {
  return (
    <>
      <Head>
        <title>Balto | New Password</title>
      </Head>
      <main>
        <ResetPasswordForm />
      </main>
    </>
  );
};

export default RestorePassword;
