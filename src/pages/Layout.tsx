import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Balto Ecommerce</title>
        <meta name="description" content="ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-between w-full min-h-[100vh] h-full bg-main gap-6 py-[50px]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
