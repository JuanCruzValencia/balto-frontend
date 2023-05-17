import Head from "next/head";
import { User } from "@/interfaces";
import { ServerRest } from "@/utils/backend/server-rest";
import { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import AdminContainer from "@/components/admin/AdminContainer";

interface PageProps {
  users: User[];
}

type ResponsePayload = {
  payload: User[];
};

const AdminPage: NextPage<PageProps> = ({ users }) => {
  return (
    <>
      <Head>
        <title>Balto | Admin</title>
      </Head>
      <main>
        <AdminContainer users={users} />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session && session.user) {
    const { data } = await ServerRest.get<ResponsePayload>("/api/users", {
      headers: { Authorization: `Bearer ${session.user.token}` },
    });

    return {
      props: {
        users: data.payload,
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

export default AdminPage;
