import RestorePasswordForm from "@/components/restore/RestorePasswordForm";
import { NextPage } from "next";
import Head from "next/head";

interface PageProps {}

const RestorePassword: NextPage<PageProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Balto | Restore Password</title>
      </Head>
      <main>
        <RestorePasswordForm />
      </main>
    </>
  );
};

export default RestorePassword;
