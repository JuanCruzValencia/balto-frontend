import { User, UserContextProps } from "@/interfaces";
import { BrowserRest } from "@/utils/frontend/browser-rest";
import { createContext } from "react";
import { useSession } from "next-auth/react";

export const UserContext = createContext<UserContextProps | {}>({});

type Props = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<Props> = ({ children }) => {
  const { data: session } = useSession();

  const getUsersList = async () => {
    const response = await BrowserRest.get(`/user`, {
      headers: {
        Authorization: `Bearer ${session?.user?.token}`,
      },
    });

    return response.data.payload;
  };

  const changeRole = async (uid: User["_id"]) => {
    const response = await BrowserRest.get(`/users/premium/${uid}`, {
      headers: {
        Authorization: `Bearer ${session?.user?.token}`,
      },
    });

    return response.data;
  };

  const deleteUser = async (uid: User["_id"]) => {
    const response = await BrowserRest.delete(`/users/${uid}`, {
      headers: {
        Authorization: `Bearer ${session?.user?.token}`,
      },
    });

    return response.data;
  };

  const deleteAllUsers = async () => {
    const response = await BrowserRest.delete("/users", {
      headers: {
        Authorization: `Bearer ${session?.user?.token}`,
      },
    });

    return response.data;
  };

  const data = {
    getUsersList,
    changeRole,
    deleteUser,
    deleteAllUsers,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
