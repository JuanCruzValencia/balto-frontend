import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Layout";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "@/context/cart/CartContext";
import { ToastContainer } from "react-toastify";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />
      </CartProvider>
    </SessionProvider>
  );
}
