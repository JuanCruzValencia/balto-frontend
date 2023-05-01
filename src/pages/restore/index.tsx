import RestorePasswordForm from "@/components/restore/RestorePasswordForm";
import Head from "next/head";

const RestorePassword = () => {
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
}