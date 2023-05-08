import { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import Head from "next/head";
import { ServerRest } from "@/utils/backend/server-rest";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Ticket } from "@/interfaces";
import PurchaseDetailContainer from "@/components/carts/PurchaseDetailContainer";

interface PageProps {
  ticket: Ticket;
}

type PurchaseResponse = {
  payload: Ticket;
};

const PurchasePage: NextPage<PageProps> = ({ ticket }) => {
  return (
    <>
      <Head>
        <title>Balto | Purchase Detail</title>
      </Head>
      <PurchaseDetailContainer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session && session.user) {
    const { data: ticket } = await ServerRest.get<PurchaseResponse>(
      `/api/carts/${context.params!.cid}`,
      {
        headers: {
          Authorization: `Bearer ${session.user.token}`,
        },
      }
    );
    return {
      props: {
        ticket: ticket.payload,
      },
    };
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};

export default PurchasePage;
